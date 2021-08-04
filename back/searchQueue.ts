export default class SearchQueue {
  constructor() {}

  addToQueue(url: string) {}

  setDoneCallback(
    callback: (responses: { url: string; response: any }[]) => void
  ) {}

  private search(url: string) {
    return fetch(url);
  }
}
