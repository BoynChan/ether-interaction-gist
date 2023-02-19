install:
	pnpm install

run-usdt:
	npx hardhat run --network polygon ./scripts/usdt_event.ts | pino-pretty