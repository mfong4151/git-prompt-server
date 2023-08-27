import { RouteObj } from "../interface/RouteObj"

export type routeMap ={
    [key:string]: (req: any, res: any) => Promise<void>
}