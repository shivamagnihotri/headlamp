---
Title: Frequently Asked Questions
---

## General Questions

### Q: What is Headlamp and who is it for?

**A:** Headlamp is an open source, extensible graphical user interface (GUI) designed to simplify the management of Kubernetes clusters. It serves as a visual management tool ideal for developers, DevOps professionals, system administrators, and overall Kubernetes users, who are looking for an intuitive way to oversee cluster operations, deployments, and troubleshooting.

### Q: What Kubernetes flavors or vendors does Headlamp support?

**A:** Headlamp is designed to be vendor-agnostic, supporting a variety of Kubernetes flavors. While it should work seamlessly with most Kubernetes distributions, we have specifically tested and ensured compatibility with certain platforms. For a comprehensive list of these tested platforms and more detailed information, please refer to our [platforms section in the documentation](https://www.headlamp.dev/docs/latest/platforms/).

### Q: Is Headlamp a desktop or web application?

**A:** Headlamp is available both as a desktop application and a web application. The desktop version can be installed on your local machine, providing easy access and management of your Kubernetes clusters. The web version, on the other hand, can be accessed through a browser, offering flexibility and convenience for users who prefer not to install additional software.

### Q: Is there any cost involved in using Headlamp?

**A:** Headlamp a 100% open source project, under the Apache 2.0 License. It is thus available at no charge, and users are encouraged to modify and redistribute it in accordance with the license terms.

### Q: Can I use Headlamp for commercial purposes?

**A:** Yes, Headlamp, under the Apache 2.0 License, is suitable for both personal and commercial use. This permissive license allows for the utilization of Headlamp in various settings, ranging from individual projects to large-scale enterprise operations, without any restrictions on commercial use.

### Q: Where can I find the source code for Headlamp?

**A:** The source code for Headlamp is publicly available on [GitHub](https://github.com/headlamp-k8s/headlamp). You are welcome to explore, fork, and contribute to the codebase.

### Q: Who maintains Headlamp?

**A:** Headlamp's core team is composed of developers that are employed by Microsoft. As a 100% open source project and a CNCF Sandbox, Headlamp has a transparent governance and it encourages any users/developers to participate in it.

### Q: What capabilities / credentials does Headlamp require to access my Kubernetes cluster?

**A:** Headlamp doesn't require access to the cluster in itself. It instead relies to RBAC when connecting to the Kubernetes API server, meaning that it's the users that are required the credentials to access the cluster (via a service token or client certificate). Headlamp may store the token in the browser's local storage, but never in its backend/server.

### Q: Is Headlamp customizable?

**A:** Yes, Headlamp is highly customizable, thanks to its robust plugin system. This system allows for the extension of Headlamp's core functionalities, catering to specific use cases and workflows. For more information on creating and managing plugins, visit our [plugins page](https://www.headlamp.dev/docs/latest/plugins/).

### Q: How often is Headlamp updated?

**A:** Headlamp tries to have a new features version released every month. Sometimes, there may be delays for a couple of weeks. Bug fix versions can be released in between feature versions, whenever appropriate (releases fixing critical bugs are often released quickly after a fix is added).

---

## Installation and Setup

### Q: How can I install and access Headlamp?

**A:** To install Headlamp, follow the detailed instructions provided in the [official installation guide](https://www.headlamp.dev/docs/latest/installation/). The process will guide you through downloading the application, setting up your Kubernetes cluster access, and launching Headlamp to connect to your cluster. For desktop applications, you can find additional information in the [desktop installation guide](https://www.headlamp.dev/docs/latest/installation/desktop/).

### Q: Can I install Headlamp in my Kubernetes cluster?

**A:** Absolutely, Headlamp can be deployed directly within your Kubernetes cluster. Detailed instructions for in-cluster installation can be found in the [in-cluster installation guide](https://www.headlamp.dev/docs/latest/installation/in-cluster/).

---

## Usage and Features

### Q: Can I monitor multiple clusters with Headlamp?

**A:** Yes, Headlamp allows you to monitor multiple clusters. You can switch between different clusters using the cluster switcher in the Headlamp interface.

### Q: Can I manage my Kubernetes resources directly through Headlamp?

**A:** Yes, Headlamp enables direct management of Kubernetes resources through its user interface. It reflects the user's role and permissions, for instance, if a user does not have deletion permissions, the delete button will not be displayed. This ensures a secure and role-compliant interaction with cluster resources.

### Q: Headlamp is not showing delete/edit/scale buttons in a resource, why is that?

**A:** Headlamp shows controls based on the user's role (RBAC), so if the user has e.g. no permissions to delete a resource, the delete button is not shown.

### Q: I cannot access any section in my cluster, it keeps saying Access Denied.

**A:** By default, Headlamp assumes users can list all namespaces. If you only have the permissions to list resources in certain namespaces, please access the cluster settings and set up the accessible namespaces.

### Q: How do I add or remove plugins in Headlamp?

**A:** To add or remove plugins in Headlamp, you can follow the plugin management instructions provided in the [Headlamp plugin documentation](https://www.headlamp.dev/docs/latest/plugins/).

### Q: Is there a way to contribute to the development of Headlamp features?

**A:** Absolutely! As an open-source project, Headlamp thrives on community contributions. You can contribute in various ways, including submitting pull requests, creating plugins, reporting issues, and suggesting new features. For more details on how to get involved, visit our [contribution section](https://www.headlamp.dev/docs/latest/contributing/).

### Q: How can I get help or assistance for Headlamp?

**A:** For support, you can refer to the [Headlamp documentation](https://www.headlamp.dev/docs/latest/) or you can consult the [troubleshooting guide](https://www.headlamp.dev/docs/latest/troubleshooting/). For further assistance, join the [Headlamp community on Slack](https://kubernetes.slack.com/messages/headlamp) or file an issue on the [GitHub issues page](https://github.com/headlamp-k8s/headlamp/issues).
