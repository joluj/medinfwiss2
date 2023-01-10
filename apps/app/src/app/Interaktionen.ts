export type Inhibitor = 1 | 2 | 3;
export type Induktor = -1;
export type Interaktionswert = Inhibitor | Induktor;

export interface IInteraktionen {
  [key: string]: Interaktionswert | IInteraktionen;
}

export interface Interaktion {
  name: string;
  value: Interaktionswert;
}

export function isInteraktion(t: unknown): t is Interaktion {
  return !!((t as Interaktion).name && (t as Interaktion).value);
}

export interface InteraktionsNode {
  name: string;

  children: InteraktionsList;
}

export type InteraktionsList = (Interaktion | InteraktionsNode)[];

export function createInteraktionsList(list: IInteraktionen): InteraktionsList {
  const ret: InteraktionsList = [];
  for (const [name, value] of Object.entries(list)) {
    if (typeof value === 'number') {
      ret.push({ name, value });
    } else {
      ret.push({ name, children: createInteraktionsList(value) });
    }
  }

  return ret;
}

export const Interaktionen: IInteraktionen = {
  CYP1A2: {
    // Inhibitoren
    Fluorchinolone: {
      Ciprofloxacin: 3,
      Ofloxacin: 1,
      Levofloxacin: 1,
    },
    Diverse: {
      Amiodaron: 1,
      Cimetidin: 2,
      Fluvoxamin: 3,
      Ticlopidin: 1,
    },

    // Induktoren
    Tabakrauch: -1,
    Omeprazol: -1,
  },
  CYP2C9: {
    // Inhibitoren
    Amiodaron: 2,
    Fluconazol: 3,
    Isoniazid: 1,
    // Induktoren
    Rifampicin: -1,
  },
  CYP2C19: {
    // Inhibitoren
    SSRI: {
      Fluoxetin: 1,
      Fluvoxamin: 1,
    },
    PPI: {
      Lansoprazol: 2,
      Omeprazol: 2,
    },
    Diverse: {
      Ketoconazol: 1,
      Ticlopidin: 1,
    },
  },
  CYP2D6: {
    // Inhibitoren
    SSRI: {
      Duloxetin: 2,
      Fluoxetin: 3,
      Paroxetin: 3,
    },
    Diverse: {
      Amiodaron: 1,
      Buproprion: 1,
      Cimetidin: 1,
      Chinidin: 3,
      Chlorpheniramin: 1,
      Clomipramin: 1,
      Ritonavir: 1,
    },
  },
  'CYP3A4/5': {
    // Inhibitoren
    'HIV-Protease-Inhibitoren': {
      Indinavir: 3,
      Nelfinavir: 3,
      Ritonavir: 3,
    },
    Makrolide: {
      Clarithromycin: 3,
      Erythromycin: 2,
    },
    'Azol-Antimykotika': {
      Fluconazol: 1,
      Itraconazol: 1,
      Ketoconazol: 3,
      Voriconazol: 1,
    },
    Diverse: {
      Aprepitant: 2,
      Amiodaron: 1,
      Cimetidin: 2,
      Diltiazem: 1,
      'Naringin (in Zitrusfruechten)': 2,
      Verapamil: 2,
    },
    // Induktoren
    'Carbamazepin (weniger Oxcarbazepin)': -1,
    Efavirenz: -1,
    'Hyperforin (in Johanniskraut)': -1,
    Phenobarbital: -1,
    Phenytoin: -1,
    Rifampicin: -1,
  },
};
