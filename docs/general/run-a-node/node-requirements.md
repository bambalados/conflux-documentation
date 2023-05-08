---
sidebar_position: 1
title: Node Requirements
---

Conflux is an entirely decentralized network that warmly welcomes individuals to join. Those who wish to take part in mining activities or host their own RPC services are required to run a Node, which is also referred to as a client. This article serves to guide you through the process of running a Conflux node.

## Archive Node VS Full Node
There are 3 types of Conflux nodes : archive node, full node and light node. The difference between three types of nodes lies in the amount of data reserved for storage. The archive node takes the most and the light node takes the least. Of course, more data consumes more hardware resources. 

In general, if you want to participate in mining, a fullnode will suffice. you need to run an archivenode if you want to use it as RPC service. The lightnode is mainly used as a wallet.

## Hardware Requirements
- The hardware requirement to run an archivenode are roughly as follows:

- CPU: 4 Cores
- RAM: 16GB
- Hard Disk: 1,5TB

Fullnode has a lower HDD requirement (1TB) and requires a discrete graphics card if you want to participate in mining.

In addition, the maximum number of open files are advised to set to 10000. In Linux, the default value is 1024, which is insufficient.