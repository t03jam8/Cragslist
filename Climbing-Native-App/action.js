export const addToCragList = (loc) => {
  console.log("THE ACTION", loc)
  return ({
    type: 'ADD_NEW_LOCATION',
    newLoc: loc,
  })
}

export const viewLocation = (locObj) => {
  // console.log("location id", locObj)
  return ({
    type: 'VIEW_LOCATION',
    obj: locObj,
  })
}



export const onInitDBrequest = (OBJ) => {
  // console.log("location id", locObj)
  return ({
    type: 'INIT_LOCATIONS',
    obj: OBJ,
  })
}
