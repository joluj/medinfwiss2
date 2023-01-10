export interface ISubstrateTabelle {
  readonly [key: string]: (string | ISubstrateTabelle)[];
}

export interface Substrat {
  name: string;
  isProDrug?: boolean;
}

export type SubstratList = (Substrat & {
  children?: Substrat[];
})[];

export function toSubstratList(substrate: ISubstrateTabelle): SubstratList {
  return Object.entries(substrate).reduce((prev, [key, value]) => {
    const children: Substrat[] = value
      .map((w) => {
        if (typeof w === 'string') {
          return { name: w, isProDrug: w.endsWith('*') };
        }
        return toSubstratList(w);
      })
      .flat();

    return prev.concat({ name: key, children });
  }, [] as SubstratList);
}

export const Substrate: ISubstrateTabelle = {
  CYP1A2: [
    'Clozapin',
    'Imipramin',
    'Mexiletin',
    'Naproxen',
    'Tacrin',
    'Theophyllin',
  ],
  CYP2C9: [
    {
      NSAID: ['Celecoxib', 'Diclofenac', 'Ibuprofen', 'Naproxen', 'Piroxicam'],
    },
    {
      Antidiabetika: ['Glipizid', 'Tolbutamid'],
    },
    {
      'Angiotensin-Rezeptor-Blocker': ['Irbesartan', 'Lorsartan'],
    },
    {
      Diverse: [
        'Cyclophosphamid',
        'Fluvastatin',
        'Phenytoin',
        'Sulfamethoxazol',
        'Torasemid',
        'Warfarin',
      ],
    },
  ],
  CYP2C19: [
    {
      'Protonenpumpen-Hemmer': ['Omeprazol', 'Lansoprazol'],
    },
    {
      Diverse: [
        'Amitriptylin',
        'Clomipramin',
        'Clopidogrel*',
        'Cyclophosphamid*',
        'Diazepam',
        'Phenytoin',
      ],
    },
  ],
  CYP2D6: [
    { Betablocker: ['Metoprolol', 'Propafenon', 'Timolol'] },
    {
      Antidepressiva: [
        'Amitriptylin',
        'Clomipramin',
        'Desipramin',
        'Duloxetin',
        'Imipramin',
        'Paroxetin',
        'Venlafaxin',
      ],
    },
    {
      Antipsychotika: [
        'Aripiprazol',
        'Haloperidol',
        'Risperidon',
        'Thioridazin',
      ],
    },
    {
      Opioide: ['Codein*', 'Dextromethorphan', 'Tramadol*'],
      Diverse: ['Ondansetron', 'Tamoxifen*'],
    },
  ],
  'CYP3A4/5': [
    {
      'Makrolid-Antibiotika': ['Clarithromycin', 'Erythromycin'],
    },
    {
      Benzodiazepine: ['Alprazolam', 'Diazepam', 'Midazolam', 'Triazolam'],
    },
    {
      Kalziumkanalblocker: [
        'Amlodipin',
        'Diltiazem',
        'Felodipin',
        'Nifedipin',
        'Nisoldipin',
        'Nitrendipin',
        'Verapamil',
      ],
    },
    {
      Immunsuppressiva: ['Ciclosporin', 'Tacrolimus', 'Sirolimus'],
    },
    {
      'HIV-Protease-Inhibitoren': ['Indinavir', 'Ritonavir', 'Saquinavir'],
    },
    {
      Statine: ['Atorvastatin', 'Lovastatin', 'Simvastatin'],
    },
    {
      Gerinnungshemmer: ['Apixaban', 'Rivaroxaban', 'Phenprocoumon'],
    },
    {
      Diverse: [
        'Aripiprazol',
        'Buspiron',
        'Chinidin',
        'Chinin',
        'Ethinylestradiol',
        'Imatinib',
        'Sildenafil',
        'Tamoxifen',
        'Vincristin',
      ],
    },
  ],
};
