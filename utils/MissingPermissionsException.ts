export class MissingPermissionsException {
  public message = "Nema permisija batooo:";

  constructor(public permissions: string[]) {}

  public toString() {
    return `${this.message} ${this.permissions.join(", ")}`;
  }
}
