import {Place} from '@/models'

export const flatTree = (treeItem) => {
  if(!Place.isValid(treeItem)) return
  const result = []
  const convert = (propTreeItem) => {
    if(Place.hasChildren(propTreeItem)) {
      for(let childTreeItem of Object.values(propTreeItem.children)) {
        convert(childTreeItem)
      }
    } else {
      result.push(propTreeItem)
    }
  } 
  convert(treeItem)
  return result
}