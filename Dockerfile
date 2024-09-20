FROM node:22
RUN mkdir /blen
WORKDIR /blen
COPY . /blen/

# Install pnpm
RUN npm install -g pnpm
# Run pnpm command to install dependencies
RUN pnpm install && pnpm migrate