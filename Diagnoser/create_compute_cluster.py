from azureml.core.compute import ComputeTarget, AmlCompute
from azureml.core.compute_target import ComputeTargetException
from azureml.core import Workspace
from configuration import config_loader

config = config_loader()
cpu_cluster_name = config['cpu_cluster_name']
ws = Workspace.from_config()
try:
    cpu_cluster = ComputeTarget(workspace=ws, name=cpu_cluster_name)
    print('Found existing cluster, use it.')
except ComputeTargetException:
    compute_config = AmlCompute.provisioning_configuration(vm_size= config['vm_size'],
                                                           max_nodes= config['max_nodes'],
                                                           location= config['location'])
    cpu_cluster = ComputeTarget.create(ws, cpu_cluster_name, compute_config)

cpu_cluster.wait_for_completion(show_output=True)