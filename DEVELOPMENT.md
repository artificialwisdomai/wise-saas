# Developing in a container

This can be significantly easier than developing in a standalone fashion.

## Launch a docker (or podman) managed container:

- -v maps the local directory to the node user home directory
- -w sets the container runtime working directory to the node user directory
- -u sets the user to the `node` user

```sh
docker run --rm -it -v $PWD:/home/node/app \
    -w /home/node/app \
    -p 3000:3000 -u node node:latest \
    /bin/bash -c 'npm i && npm run dev'
```
