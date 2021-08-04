import { Protocol, Node, SearchParams } from "./types";

export default class Search {
  constructor(searchParams: SearchParams) {
    const googleNode: Node = {
      link: searchParams.url,
      children: [],
      parent: undefined,
      leadsToSuccess: false,
      parentLinkStrength: undefined,
    };
    const protocol: Protocol = {
      status: "initializing",
      root: googleNode,
      rarity: null,
      minimalSearchParam: null,
      keywords: [],
    };
    // db.createProtocol(protocol)
    // start worker thread
  }

  setProtocolStatus(protocol: string, state: Protocol) {
    // db.setProtocolState(protocol, state)
  }

  static getSearchState(protocol: string) {
    // return db.queryProtocol(protocol);
  }
}
