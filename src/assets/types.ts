export type ApplyData = (data?: any) => void;

export type RequestDetails = {
  url: string,
  method: string,
  headers?: any,
  body?: any
}

export type CarData = {
  id: number,
  model: string,
  fuelCapacity: number,
  isAirCondition: boolean,
  isAvailable: boolean
}

export type InputProps = {
  label?:string,
  id?: string,
  type: string,
  min?:string,
  max?:string,
  value?:string,
  placeholder?:string,
  onChange?: (e:any) => void
}

