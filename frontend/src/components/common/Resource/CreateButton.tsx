import { InlineIcon } from '@iconify/react';
import Button from '@material-ui/core/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { apply } from '../../../lib/k8s/apiProxy';
import { KubeObjectInterface } from '../../../lib/k8s/cluster';
import { dispatchHeadlampEvent } from '../../../lib/util';
import { clusterAction } from '../../../redux/actions/actions';
import { HeadlampEventType } from '../../../redux/eventCallbackSlice';
import ActionButton from '../ActionButton';
import EditorDialog from './EditorDialog';

interface CreateButtonProps {
  isNarrow?: boolean;
}

export default function CreateButton(props: CreateButtonProps) {
  const { isNarrow } = props;
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const location = useLocation();
  const { t } = useTranslation(['resource', 'frequent']);

  const applyFunc = async (newItems: KubeObjectInterface[]) => {
    await Promise.allSettled(newItems.map(newItem => apply(newItem))).then((values: any) => {
      values.forEach((value: any, index: number) => {
        if (value.status === 'rejected') {
          let msg;
          const kind = newItems[index].kind;
          const name = newItems[index].metadata.name;
          const apiVersion = newItems[index].apiVersion;
          if (newItems.length === 1) {
            msg = t('resource|Failed to create {{ kind }} {{ name }}.', { kind, name });
          } else {
            msg = t('resource|Failed to create {{ kind }} {{ name }} in {{ apiVersion }}.', {
              kind,
              name,
              apiVersion,
            });
          }
          setErrorMessage(msg);
          setOpenDialog(true);
          throw msg;
        }
      });
    });
  };

  function handleSave(newItemDefs: KubeObjectInterface[]) {
    let massagedNewItemDefs = newItemDefs;
    const cancelUrl = location.pathname;

    // check if all yaml objects are valid
    for (let i = 0; i < massagedNewItemDefs.length; i++) {
      if (massagedNewItemDefs[i].kind === 'List') {
        // flatten this List kind with the items that it has which is a list of valid k8s resources
        const deletedItem = massagedNewItemDefs.splice(i, 1);
        massagedNewItemDefs = massagedNewItemDefs.concat(deletedItem[0].items);
      }
      if (!massagedNewItemDefs[i].metadata?.name) {
        setErrorMessage(
          t(`resource|Invalid: One or more of resources doesn't have a name property`)
        );
        return;
      }
      if (!massagedNewItemDefs[i].kind) {
        setErrorMessage(t('resource|Invalid: Please set a kind to the resource'));
        return;
      }
    }
    // all resources name
    const resourceNames = massagedNewItemDefs.map(newItemDef => newItemDef.metadata.name);
    setOpenDialog(false);
    dispatch(
      clusterAction(() => applyFunc(massagedNewItemDefs), {
        startMessage: t('resource|Applying {{ newItemName }}…', {
          newItemName: resourceNames.join(','),
        }),
        cancelledMessage: t('resource|Cancelled applying {{ newItemName }}.', {
          newItemName: resourceNames.join(','),
        }),
        successMessage: t('resource|Applied {{ newItemName }}.', {
          newItemName: resourceNames.join(','),
        }),
        errorMessage: t('resource|Failed to apply {{ newItemName }}.', {
          newItemName: resourceNames.join(','),
        }),
        cancelUrl,
      })
    );
  }

  return (
    <React.Fragment>
      {isNarrow ? (
        <ActionButton
          description={t('frequent|Create / Apply')}
          onClick={() => setOpenDialog(true)}
          icon="mdi:plus-box"
          width="48"
          iconButtonProps={{
            color: 'primary',
          }}
        />
      ) : (
        <Button
          onClick={() => {
            setOpenDialog(true);
            dispatchHeadlampEvent(HeadlampEventType.CREATE_BUTTON);
          }}
          startIcon={<InlineIcon icon="mdi:plus" />}
          color="primary"
          variant="contained"
        >
          {t('frequent|Create')}
        </Button>
      )}
      <EditorDialog
        item={{}}
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSave={handleSave}
        saveLabel={t('frequent|Apply')}
        errorMessage={errorMessage}
        onEditorChanged={() => setErrorMessage('')}
        title={t('frequent|Create / Apply')}
      />
    </React.Fragment>
  );
}
