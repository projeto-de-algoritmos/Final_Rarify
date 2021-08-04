export interface SearchParams {
  url: string;
  method: "bfs" | "dfs" | "best first";
  order: "random" | "first";
  maxDepth: number;
  maxChars: number;
}

export interface Node {
  children: Node[];
  parent: Node;
  link: string;
  leadsToSuccess: boolean;
  parentLinkStrength: number;
}

export interface Protocol {
  status: string;
  root: Node;
  rarity: null | number;
  minimalSearchParam: null | string;
  keywords: string[];
}
