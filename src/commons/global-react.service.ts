class GlobalReactService {
  environment: string = process.env.REACT_APP_ENV || "";
}

export const globalReactService = new GlobalReactService();
