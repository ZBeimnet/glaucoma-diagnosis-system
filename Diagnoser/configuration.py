import yaml
def config_loader():
    config = yaml.load(open('./config.yaml'))
    return config