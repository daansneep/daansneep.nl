export class SkillExperience {
  constructor(private readonly _name: string, private readonly _img: string, private readonly _explainer: string[]) {
  }

  get name(): string {
    return this._name;
  }

  get img(): string {
    return this._img;
  }

  get explainer(): string[] {
    return this._explainer;
  }
}
