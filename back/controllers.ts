import { protocol } from "./db.ts";

export const search = async (
  ctx: any,
  term: string
): Promise<{ protocolId: string }> => {
  const protocolObj = await protocol.insertOne({
    status: "started",
    term,
  });
  return { protocolId: protocolObj.toString() };
};

export const getProtocol = async (
  ctx: any,
  protocol: string
): Promise<object> => {
  return {
    nothing: "found",
  };
};
