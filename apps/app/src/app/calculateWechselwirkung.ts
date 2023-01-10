import {
  InteraktionsList,
  InteraktionsNode,
  Interaktionswert,
  isInteraktion,
} from './Interaktionen';
import { Substrat, SubstratList } from './Substrate';

type SubstratMap = Map<string, Substrat[]>;
type InteraktionsMap = Map<string, { [name: string]: Interaktionswert }>;

export type WechselwirkungResult = {
  enzym: string;
  substrat: string;
  reason: string;
};

function addSubstrate(map: SubstratMap, key: string, list: SubstratList) {
  for (const substrat of list) {
    if (substrat.children && substrat.children.length > 0) {
      addSubstrate(map, key, substrat.children);
    } else {
      map.set(key, (map.get(key) ?? []).concat(substrat));
    }
  }
}

function addInteraktionen(
  map: InteraktionsMap,
  key: string,
  list: InteraktionsList
) {
  for (const interaktion of list) {
    if (isInteraktion(interaktion)) {
      const obj = map.get(key) ?? {};
      obj[interaktion.name] = interaktion.value;
      map.set(key, obj);
    } else {
      addInteraktionen(map, key, interaktion.children);
    }
  }
}

export function calculateWechselwirkung(
  substrateList: SubstratList,
  interaktionenList: InteraktionsList,
  substrateOfPatient: string[]
) {
  const plainSubstrate: SubstratMap = new Map();
  for (const substrat of Object.values(substrateList)) {
    addSubstrate(plainSubstrate, substrat.name, substrat.children ?? []);
  }

  const plainInteraktionen: InteraktionsMap = new Map();
  for (const interaktion of Object.values(interaktionenList)) {
    addInteraktionen(
      plainInteraktionen,
      interaktion.name,
      (interaktion as InteraktionsNode).children
    );
  }

  // Remove unused
  const filteredSubstrate: SubstratMap = new Map();
  const filteredInteraktionen: InteraktionsMap = new Map();

  for (const [key, value] of plainSubstrate.entries()) {
    filteredSubstrate.set(
      key,
      value.filter((x) => substrateOfPatient.includes(x.name))
    );
  }
  for (const [key, interaktionen] of plainInteraktionen.entries()) {
    filteredInteraktionen.set(
      key,
      Object.entries(interaktionen)
        .filter(([name]) => substrateOfPatient.includes(name))
        .reduce(
          (prev, [key, value]) => ({
            ...prev,
            [key]: value,
          }),
          {} as Record<string, Interaktionswert>
        )
    );
  }

  const results: WechselwirkungResult[] = [];
  for (const [enzym, substrates] of filteredSubstrate.entries()) {
    for (const [reason] of Object.entries(
      filteredInteraktionen.get(enzym) ?? {}
    )) {
      for (const substrat of substrates) {
        results.push({
          enzym,
          substrat: substrat.name,
          reason,
        });
      }
    }
  }

  return results;
}
