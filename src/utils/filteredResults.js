export const filterLodgings = (
  lodgings,
  numberOfBathrooms,
  numberOfRooms,
  accommodationType
) => {
  return lodgings.filter((lodging) => {
    if (
      numberOfBathrooms !== null &&
      parseInt(lodging.CantidadBanios) !== parseInt(numberOfBathrooms)
    ) {
      return false;
    }
    if (
      numberOfRooms !== null &&
      parseInt(lodging.CantidadDormitorios) !== parseInt(numberOfRooms)
    ) {
      return false;
    }
    if (
      accommodationType !== null &&
      parseInt(lodging.TipoAlojamiento) !== parseInt(accommodationType)
    ) {
      return false;
    }
    return true;
  });
};
