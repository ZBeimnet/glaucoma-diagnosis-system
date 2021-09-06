from azureml.core import Workspace
from configuration import config_loader

config = config_loader()
ws = Workspace.create(
    name = config['ws_name'],
    subscription_id = config['subscription_id'],
    create_resource_group = True, 
    location = config['location']
)

ws.write_config()
