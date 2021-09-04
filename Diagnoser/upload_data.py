from azureml.core import Workspace
from configuration import config_loader

config = config_loader()
ws = Workspace.from_config()
datastore = ws.get_default_datastore()
datastore.upload(src_dir = config['dataset_folder'],
                    target_path = './',
                    overwrite = True )
