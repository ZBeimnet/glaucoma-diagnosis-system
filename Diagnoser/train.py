import os
import argparse
import torch
import torch.optim as optim
import torchvision
import torchvision.transforms as transforms
from model import Net
from azureml.core import Run

run = Run.get_context()
if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument(
        '--data_path',
        type=str,
        help='Path to the training data'
    )
    parser.add_argument(
        '--learning_rate',
        type=float,
        default=0.001,
        help='Learning rate for SGD'
    )
    parser.add_argument(
        '--momentum',
        type=float,
        default=0.9,
        help='Momentum for SGD'
    )
    args = parser.parse_args()

    transform = transforms.Compose([
        transforms.ToTensor(),
        transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
    ])
    trainset = torchvision.datasets.ImageFolder(
        root=args.data_path,
        train=True,
        download=False,
        transform=transform,
    )
    trainloader = torch.utils.data.DataLoader(
        trainset,
        batch_size=4,
        shuffle=True,
        num_workers=2
    )
    net = Net()
    criterion = torch.nn.CrossEntropyLoss()
    optimizer = optim.SGD(
        net.parameters(),
        lr=args.learning_rate,
        momentum=args.momentum,
    )
    for epoch in range(2):
        running_loss = 0.0
        for i, data in enumerate(trainloader, 0):
            inputs, labels = data
            optimizer.zero_grad()
            outputs = net(inputs)
            loss = criterion(outputs, labels)
            loss.backward()
            optimizer.step()
            running_loss += loss.item()
            if i % 2000 == 1999:
                loss = running_loss / 2000
                run.log('loss', loss) 
                print(f'epoch={epoch + 1}, batch={i + 1:5}: loss {loss:.2f}')
                running_loss = 0.0
                
    print('Finished Training')