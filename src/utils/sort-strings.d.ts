interface ISortSrings {
  ascending(items: any[]): string[]
  descending(items: any[]): string[]
}

const sortStrings: ISortSrings

export default sortStrings
