from azureml.core import Workspace
from azureml.core import Experiment
from azureml.core import Environment
from azureml.core import ScriptRunConfig
from azureml.core import Dataset
from azureml.data.datapath import DataPath
from configuration import config_loader
if __name__ == "__main__":
    config = config_loader()
    ws = Workspace.from_config()
    datastore = ws.get_default_datastore()
    dataset = Dataset.File.from_files(path=(datastore, 'Train'))
    
    experiment = Experiment(workspace=ws, name='GDS_MODEL')

    config = ScriptRunConfig(
        source_directory= config['source_directory'],
        script= config['train_script'],
        compute_target= config['gpu_instance'],
        arguments=[
            '--data_path', dataset.as_named_input('input').as_mount(),
            '--learning_rate', 0.003,
            '--momentum', 0.92],
    )

    env = ws.environments['env']
    config.run_config.environment = env

    run = experiment.submit(config)
    aml_url = run.get_portal_url()
    print("Submitted to compute cluster. Click link below")
    print("")
    print(aml_url)