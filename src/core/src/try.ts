import { getEntityRef } from "./remult3/RepositoryImplementation"




export function Try() {
  return 7
}
function y(){
  getEntityRef(undefined)
}
export function makeTitle(name: string) {
  // insert a space before all caps
  return (
    name
      .replace(/([A-Z])/g, " $1")
      // uppercase the first character
      .replace(/^./, (str) => str.toUpperCase())
      .replace("Email", "eMail")
      .replace(" I D", " ID")
  )
}