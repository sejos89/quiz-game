const questions = {
  nuclear_chemistry: [
    {
      question: "In a cathode ray tube",
      answers: [
        "electrons pass from the anode to the cathode",
        "electrons pass from the cathode to the anode",
        "protons pass from the anode to the cathode",
        "protons pass from the cathode to the anode",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "The scientist who determined the magnitude of the electric charge of the electron was",
      answers: [
        "John Dalton",
        "Robert Millikan",
        "J. J. Thomson",
        "Henry Moseley",
        "R. Chang",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Which of the following scientists developed the nuclear model of the atom?",
      answers: [
        "John Dalton",
        "Robert Millikan",
        "J. J. Thomson",
        "Henry Moseley",
        "Ernest Rutherford",
      ],
      correctAnswerIndex: 4,
    },
    {
      question:
        "Rutherford's experiment with alpha particle scattering by gold foil established that",
      answers: [
        "protons are not evenly distributed throughout an atom",
        "electrons have a negative charge",
        "electrons have a positive charge",
        "atoms are made of protons, neutrons, and electrons",
        "are 1840 times heavier than electrons",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Atoms of the same element with different mass numbers are called",
      answers: [
        "ions",
        "neutrons",
        "allotropes",
        "chemical families",
        "isotopes",
      ],
      correctAnswerIndex: 4,
    },
    {
      question:
        "An atom of the isotope ¹³⁷Ba consists of how many protons (p), neutrons (n), and electrons (e)?",
      answers: [
        "56 p, 137 n, 56 e",
        "56 p, 81 n, 56 e",
        "137 p, 81 n, 56 e",
        "56 p, 56 n, 56 e",
        "81 p, 56 n, 81 e",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Give the number of protons (p), neutrons (n), and electrons (e) in one atom of ²³⁸U",
      answers: [
        "146 p, 92 n, 92 e",
        "92 p, 92 n, 92 e",
        "92 p, 146 n, 92e",
        "146 p, 28 n, 146 e",
        "238 p, 146 n, 238 e",
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "Which of the following are isotopes?",
      answers: [
        "¹⁴C and ¹³C",
        "¹⁴C and ¹⁴N",
        "¹⁴N and ¹⁴N³⁻",
        "¹²C and ¹²CO",
        "¹⁴N and ¹⁴N2",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "What are the Mass number, protons, neutrons and electrons of ⁴⁰K",
      answers: [
        "40, 19, 21, 19",
        "40, 21, 19, 19",
        "41, 22, 19, 19",
        "40, 20, 20, 0",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "What is the isotope with mass number 97, protons 40, neutrons 57 and electrons 40?",
      answers: ["⁹⁷Zr", "⁴⁰Zr", "⁵⁷La", "⁹⁷Bk", "⁸⁰Hg"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "What are the Mass number, protons, neutrons and electrons of ⁴⁰Ca²⁺",
      answers: [
        "40, 20, 20, 20",
        "40, 20, 20, 18",
        "20, 20, 40, 20",
        "40, 20, 20, 22",
        "20, 40, 20, 22",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "The elements in a column of the periodic table are known as",
      answers: [
        "metalloids",
        "a period",
        "noble gases",
        "a group",
        "nonmetals",
      ],
      correctAnswerIndex: 3,
    },
    {
      question:
        "Which of the following elements is most likely to be a good conductor of electricity?",
      answers: ["N", "S", "He", "Cl", "Fe"],
      correctAnswerIndex: 4,
    },
    {
      question:
        "Which of the following elements is chemically similar to magnesium?",
      answers: ["sulfur", "calcium", "iron", "nickel", "potassium"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Which of the following elements is chemically similar to potassium?",
      answers: ["calcium", "arsenic", "phosphorus", "cerium", "cesium"],
      correctAnswerIndex: 4,
    },
    {
      question: "An anion is defined as",
      answers: [
        "a charged atom or group of atoms with a net negative charge",
        "a stable atom",
        "a group of stable atoms",
        "an atom or group of atoms with a net positive charge",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Which one of the following elements is most likely to form a 2+ ion?",
      answers: ["calcium", "carbon", "fluorine", "oxygen", "sodium"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Which one of the following elements is most likely to form a 2– ion?",
      answers: ["scandium", "selenium", "silicon", "strontium", "iodine"],
      correctAnswerIndex: 1,
    },
    {
      question: "An aluminum ion, Al³⁺, has:",
      answers: [
        "13 protons and 13 electrons",
        "27 protons and 24 electrons",
        "16 protons and 13 electrons",
        "13 protons and 10 electrons",
        "10 protons and 13 electrons",
      ],
      correctAnswerIndex: 3,
    },
    {
      question: "An oxide ion, O²⁻, has:",
      answers: [
        "8 protons and 10 electrons",
        "10 protons and 8 electrons",
        "8 protons and 9 electrons",
        "8 protons and 7 electrons",
        "10 protons and 7 electrons",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "An iron(II) ion has:",
      answers: [
        "24 electrons and a charge of 2+",
        "24 electrons and a charge of 2–",
        "26 electrons and a charge of 2+",
        "28 electrons and a charge of 2+",
        "28 electrons and a charge of 2–",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "How many protons and electrons are present in one Br– ion?",
      answers: [
        "35 p, 35 e",
        "80 p, 81 e",
        "35 p, 34 e",
        "35 p, 36 e",
        "80 p, 34 e",
      ],
      correctAnswerIndex: 3,
    },
    {
      question: "What are the two different ions present in the compound Li₃N?",
      answers: ["Li⁺, N³⁻", "Li³⁺, N⁻", "Li₃³⁺, N³⁻", "Li⁺, N⁻", "Li³⁺, N³⁻"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "What is the formula for the ionic compound containing calcium ions and oxide ions?",
      answers: ["CaO", "Ca₂O", "CaO₂", "Ca₃O", "CaO₃"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "What is the formula for the ionic compound containing sodium ions and nitride ions?",
      answers: ["NaN", "Na₂N", "NNa₂", "Na₃N", "NNa₃"],
      correctAnswerIndex: 3,
    },
    {
      question: "Of the following which is NOT a contribution of Marie Curie?",
      answers: [
        "Discovered two new elements",
        "Her scientific studies were awarded a Nobel Prize in chemistry",
        "She discovered the Law of Conservation of Mass",
        "She suggested the term 'radioactivity'",
        "Her scientific studies were awarded a Nobel Prize in physics",
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Which scientist is credited with suggesting the name 'radioactivity' to describe the spontaneous emission of particles and/or radiation?",
      answers: [
        "Ernst Rutherford",
        "J.J. Thomson",
        "Johannes Geiger",
        "Raymond Chang",
        "Marie Curie",
      ],
      correctAnswerIndex: 4,
    },
    {
      question: "Alpha particles are identical to",
      answers: [
        "protons",
        "helium atoms",
        "hydrogen atoms",
        "helium nuclei",
        "electrons",
      ],
      correctAnswerIndex: 3,
    },
  ],
  periodic_relationship: [
    {
      question: "The elements in Group 7A are known by what name?",
      answers: [
        "transition metals",
        "halogens",
        "alkali metals",
        "alkaline earth metals",
        "noble gases",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "The alkali metal elements are found in _______ of the periodic table",
      answers: ["Group 1A", "Group 2A", "Group 3A", "Period 7", "Period 1"],
      correctAnswerIndex: 0,
    },
    {
      question: "Which one of the following elements is a Lanthanide?",
      answers: ["U", "Ce", "Os", "Bi", "Cs"],
      correctAnswerIndex: 1,
    },
    {
      question: "Which one of the following elements is a transition element?",
      answers: ["antimony", "barium", "chromium", "potassium", "selenium"],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Which of the following is the general electron configuration for the outermost electrons of the elements in Group 5A?",
      answers: ["ns²np⁶", "ns²np⁵", "ns²np⁴", "ns²np³", "ns²np¹"],
      correctAnswerIndex: 3,
    },
    {
      question:
        "Which of the following is the general electron configuration for the outermost electrons of elements in the alkaline earth group?",
      answers: ["ns¹", "ns²", "ns²np⁴", "ns²np⁵", "ns²np⁶(n -1)d⁶"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Which of the following is the general electron configuration for the outermost electrons of the halogens?",
      answers: ["ns²np⁶", "ns²np⁵", "ns²np⁶(n -1)d7", "ns¹", "ns²np⁷"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "An element with the general electron configuration for its outermost electrons of ns²np¹ would be in which element group?",
      answers: ["2A", "3A", "4A", "5A", "8A"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Consider the element with the electron configuration [Kr]5s²4d⁷. This element is",
      answers: [
        "a representative element",
        "a transition metal",
        "a nonmetal",
        "an actinide element",
        "a noble gas",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "How many valence electrons does S²⁻ have?",
      answers: ["2", "4", "6", "16", "8"],
      correctAnswerIndex: 4,
    },
    {
      question:
        "How many electrons does a sulfur atom need to fill its outermost s and p subshells? ",
      answers: ["6", "8", "4", "2", "1"],
      correctAnswerIndex: 3,
    },
    {
      question: "How many electrons are in the 4p subshell of selenium?",
      answers: ["0", "2", "4", "5", "6"],
      correctAnswerIndex: 2,
    },
    {
      question: "Which one of the following elements forms a stable 3- anion?",
      answers: ["P", "S", "Cl", "Al", "Mg"],
      correctAnswerIndex: 0,
    },
    {
      question: "Which one of the following elements forms a stable 1- anion?",
      answers: ["K", "Be", "Al", "O", "I"],
      correctAnswerIndex: 4,
    },
    {
      question: "Which one of the following elements forms a stable 2+ cation?",
      answers: ["Kr", "I", "Se", "Al", "Ba"],
      correctAnswerIndex: 4,
    },
    {
      question:
        "Which of the following make an isoelectronicpair: Cl⁻, O²⁻, F, ²⁺, Fe³⁺?",
      answers: [
        "Ca²⁺ and Fe³⁺",
        "O²⁻ and F",
        "F and Cl⁻",
        "Cl⁻ and Ca²⁺",
        "None of the above",
      ],
      correctAnswerIndex: 3,
    },
    {
      question: "Which one of the following pairs are isoelectronic?",
      answers: [
        "Mn²⁺ and Ar",
        "Zn²⁺ and Cu²⁺",
        "Na⁺ and K⁺",
        "Cl⁻, and S",
        "K⁺ and Cl⁻,",
      ],
      correctAnswerIndex: 4,
    },
    {
      question: "Which one of the following is not isoelectronic with Kr?",
      answers: ["As³⁺", "Se²⁻", "Rb⁺", "Sr²⁺", "Br⁻"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Which of the following is the electron configuration for the aluminum ion?",
      answers: [
        "1s²2s²2p⁶3s²",
        "1s²2s²2p⁶3s²3p²",
        "1s²2s²2p⁶3s²3p¹",
        "1s²2s²2p⁶",
        "1s²2s²2p⁶3s²3p⁴",
      ],
      correctAnswerIndex: 3,
    },
    {
      question: "The electron configuration of a copper(I) ion is",
      answers: [
        "[Ar]4s²3d⁸",
        "[Ar]4s¹3d⁹",
        "[Ar]3d¹⁰",
        "[Ar]4s²3d⁶4p²",
        "[Kr]",
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "The cobalt(III) ion, Co³⁺, has how many 3d electrons?",
      answers: ["0", "7", "6", "5", "4"],
      correctAnswerIndex: 2,
    },
    {
      question: "Which of the atoms listed below has the smallest radius?",
      answers: ["Al", "P", "As", "Te", "Na"],
      correctAnswerIndex: 1,
    },
    {
      question: "Which of the atoms listed below has the largest radius?",
      answers: ["Cl", "I", "P", "Sb", "Se"],
      correctAnswerIndex: 3,
    },
    {
      question:
        "Which of the elements listed below has the highest first ionization energy?",
      answers: ["He", "Ne", "Ar", "Kr", "Xe"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Which of the elements listed below has the highest first ionization energy?",
      answers: ["C", "Ge", "P", "O", "Se"],
      correctAnswerIndex: 3,
    },
    {
      question:
        "Which of the following elements has the smallest first ionization energy?",
      answers: ["Cl", "Na", "Be", "K", "As"],
      correctAnswerIndex: 3,
    },
    {
      question:
        "Which of the following elements has the greatest electron affinity (largest positive value)?",
      answers: ["Mg", "Al", "Si", "P", "S"],
      correctAnswerIndex: 4,
    },
    {
      question:
        "Which of the following elements has the greatest metallic character?",
      answers: ["Br", "F", "Ge", "Mn", "Sc"],
      correctAnswerIndex: 4,
    },
  ],
  ionic_bond: [
    {
      question:
        "Which one of the following is most likely to be an ionic compound?",
      answers: ["CaCl₂", "CO₂", "CS₂", "SO₂", "OF₂"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Complete this statement: Coulomb's law states that the magnitude of the force of interaction between two charged bodies is",
      answers: [
        "directly proportional to the product of the charges on the bodies and directly proportional to the distance separating them",
        "directly proportional to the product of the charges on the bodies, and inversely proportional to the square of the distance separating them",
        "inversely proportional to the product of the charges on the bodies, and directly proportional to the square of the distance separating them",
        "directly proportional to the sum of the charges on the bodies, and inversely proportional to the square of the distance separating them",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Which one of the following ionic solids would have the largest lattice energy?",
      answers: ["NaCl", "NaF", "CaBr₂", "CsI", "CaCl₂"],
      correctAnswerIndex: 4,
    },
    {
      question:
        "Which of the following solids would have the highest melting point?",
      answers: ["NaI", "NaF", "MgO", "MgCl₂", "KF"],
      correctAnswerIndex: 2,
    },
    {
      question:
        "A nonpolar covalent bond (i.e., pure covalent) would form in which one of the following pairs of atoms?",
      answers: ["Na — Cl", "H — Cl", "Li — Br", "Se — Br", "Br — Br"],
      correctAnswerIndex: 4,
    },
    {
      question: "The total number of valence electrons in the molecule CO₂ is",
      answers: ["4", "10", "14", "16", "20"],
      correctAnswerIndex: 3,
    },
    {
      question: "The number of lone electron pairs in the N₂ molecule is ___",
      answers: ["1", "2", "3", "4", "5"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "The Lewis structure reveals a double bond in which of the following molecules?",
      answers: ["Br₂", "O₂", "N₂", "H₂", "CH₄"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "The Lewis structure reveals only single bonds in which of the following species?",
      answers: ["CO₂", "CO", "CO₃²⁻", "Cl₂CO", "CCl₄"],
      correctAnswerIndex: 4,
    },
    {
      question:
        "The Lewis structure reveals an unpaired electron (free radical) in which of the following species?",
      answers: ["NO₃⁻", "N₂O", "NO₂", "NO₂⁻", "HNO₃"],
      correctAnswerIndex: 2,
    },
    {
      question: "The number of lone electron pairs in the ClO₄⁻ ion is ___",
      answers: ["3", "4", "6", "12", "24"],
      correctAnswerIndex: 3,
    },
    {
      question:
        "The number of resonance structures for the sulfur dioxide molecule that satisfy the octet rule is",
      answers: ["1", "2", "3", "4", "None of these"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Assuming the octet rule is obeyed, how many covalent bonds will a nitrogen atom form to give a formal charge of zero?",
      answers: ["0", "1", "2", "3", "4"],
      correctAnswerIndex: 3,
    },
    {
      question:
        "In the Lewis structure of the iodate ion, IO₃⁻, that satisfies the octet rule, the formal charge on the central iodine atom is",
      answers: ["+2", "+1", "0", "-1", "-2"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Each of the three resonance structures of NO₃⁻ has how many lone pairs of electrons?",
      answers: ["7", "8", "9", "10", "13"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Which of the elements listed below is most likely to exhibit an expanded octet in its compounds?",
      answers: ["O", "S", "Na", "C", "N"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Which one of the following compounds does not follow the octet rule?",
      answers: ["NF₃", "CF₄", "PF₅", "AsH₃", "HCl"],
      correctAnswerIndex: 2,
    },
  ],
  covalent_bond: [
    {
      question:
        "Give the number of lone pairs around the central atom and the molecular geometry of CBr₄",
      answers: [
        "0 lone pairs, square planar",
        "0 lone pairs, tetahedral",
        "1 lone pair, square pyramidal",
        "1 lone pair, trigonal bipyramidal",
        "2 lone pairs, square planar",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Give the number of lone pairs around the central atom and the molecular geometry of SCl₂",
      answers: [
        "0 lone pairs, linear",
        "1 lone pair, bent",
        "2 lone pairs, bent",
        "3 lone pairs, bent",
        "3 lone pairs, linear",
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Give the number of lone pairs around the central atom and the molecular geometry of XeF₂",
      answers: [
        "0 lone pairs, linear",
        "1 lone pair, bent",
        "2 lone pairs, bent",
        "3 lone pairs, bent",
        "3 lone pairs, linear",
      ],
      correctAnswerIndex: 4,
    },
    {
      question:
        "Give the number of lone pairs around the central atom and the molecular geometry of IF₅",
      answers: [
        "0 lone pairs, square pyramidal",
        "0 lone pairs, trigonal bipyramidal",
        "1 lone pair, octahedral",
        "1 lone pair, square pyramidal",
        "2 lone pairs, pentagonal",
      ],
      correctAnswerIndex: 3,
    },
    {
      question:
        "Give the number of lone pairs around the central atom and the geometry of the ion NO₂⁻. ",
      answers: [
        "0 lone pairs, linear",
        "1 lone pair, bent",
        "2 lone pair, bent",
        "3 lone pairs, bent",
        "3 lone pairs, linear",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "According to the VSEPR theory, the geometry of the SO₃ molecule is",
      answers: [
        "pyramidal",
        "tetrahedral",
        "trigonal planar",
        "distorted tetrahedron (seesaw)",
        "square planar",
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        "According to the VSEPR theory, which one of the following species is linear?",
      answers: ["H₂S", "HCN", "BF₃", "H₂CO", "SO₂"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Which one of the following molecules has tetrahedral geometry?",
      answers: ["XeF₄", "BF₃", "AsF₅", "CF₄", "NH₃"],
      correctAnswerIndex: 3,
    },
    {
      question: "The bond angles in SCl₂ are expected to be",
      answers: [
        "a little less than 109.5°",
        "109.5°",
        "a little more than 109.5°",
        "120°",
        "180°",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "The bond angles in ICl₂⁻ are expected to be",
      answers: [
        "a little less than 109.5°",
        "109.5°",
        "a little more than 109.5°",
        "120°",
        "180°",
      ],
      correctAnswerIndex: 4,
    },
    {
      question: "The F – S – F bond angles in SF⁶ are",
      answers: ["90° and 180°", "109.5°", "120°", "180°", "90° and 120°"],
      correctAnswerIndex: 0,
    },
    {
      question: "Which one of the following molecules is nonpolar?",
      answers: ["NH₃", "OF₂", "CH₃Cl", "H₂O", "BeCl₂"],
      correctAnswerIndex: 4,
    },
    {
      question:
        "Which of the following molecules has polar bonds but is a nonpolar molecule?",
      answers: ["CO", "CO₂", "CHCl₃", "Cl₂", "HCl"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Which one of the following molecules has a zero dipole moment?",
      answers: ["CO", "CH₂Cl₂", "SO₃", "SO₂", "NH₃"],
      correctAnswerIndex: 2,
    },
    {
      question: "Which one of the following molecules is polar?",
      answers: ["PBr₅", "CCl₄", "BrF₅", "XeF₂", "XeF₄"],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Which of the following species has the largest dipole moment (i.e., is the most polar)?",
      answers: ["H₂", "H₂O", "H₂S", "H₂Se", "CH₄"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "The geometry of the hybrid orbitals about a central atom with sp³d hybridization is",
      answers: [
        "linear",
        "trigonal planar",
        "tetrahedral",
        "bent",
        "trigonal bipyramidal",
      ],
      correctAnswerIndex: 4,
    },
    {
      question:
        "A sp² hybridized central atom has what angles between its hybrid orbitals?",
      answers: ["145°", "120°", "109.5°", "90°", "< 90°"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "According to Molecular Orbital Theory, two separate 1s orbitals interact to form what molecular orbital(s)?",
      answers: ["σ only", "σ and σ*", "π only", "π and π*", "σ and π"],
      correctAnswerIndex: 1,
    },
  ],
  intermolecular: [
    {
      question:
        "Which one of the following substances is expected to have the highest boiling point?",
      answers: ["Br₂", "Cl₂", "F₂", "I₂"],
      correctAnswerIndex: 3,
    },
    {
      question:
        "Which one of the following substances is expected to have the lowest melting point?",
      answers: ["BrI", "CsI", "LiI", "NaI", "RbI"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Which one of the following substances is expected to have the highest boiling point?",
      answers: ["HBr", "HCl", "HF", "HI"],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Which one of the following substances is expected to have the highest melting point?",
      answers: ["CH₄", "CCl₄", "CO", "CO₂", "C(diamond)"],
      correctAnswerIndex: 4,
    },
    {
      question:
        "Which one of the following substances will have both dispersion forces and dipole-dipole forces?",
      answers: ["HCl", "BCl₃", "Br₂", "H₂", "CO₂"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Which one of the following substances should exhibit hydrogen bonding in the liquid state?",
      answers: ["PH₃", "H₂", "H₂S", "CH₄", "NH₃"],
      correctAnswerIndex: 4,
    },
    {
      question:
        "Arrange the following substances in order of increasing boiling point: CH3OH, He, CH3Cl, and N2",
      answers: [
        "CH₃OH < He < CH₃Cl < N₂",
        "He < N₂< CH₃OH < CH₃Cl",
        "N₂< He < CH₃OH < CH₃Cl",
        "He < N₂< CH₃Cl < CH₃OH",
        "CH₃Cl < He < N₂< CH₃OH",
      ],
      correctAnswerIndex: 3,
    },
    {
      question:
        "Which of the following properties indicates the presence of strong intermolecular forces in a liquid?",
      answers: [
        "a low heat of vaporization",
        "a low critical temperature",
        "a low vapor pressure",
        "a low boiling point",
        "None of the above",
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Which one of the following substances should exhibit hydrogen bonding in the liquid state?",
      answers: ["PH₃", "He", "H₂S", "CH₄", "CH₃OH"],
      correctAnswerIndex: 4,
    },
    {
      question: "An example of a covalent network solid is",
      answers: [
        "diamond",
        "potassium",
        "iodine",
        "sodium chloride",
        "none of these",
      ],
      correctAnswerIndex: 0,
    },
  ],
  acids_bases: [
    {
      question: "The hydronium ion and the hydroxide ion, in that order, are",
      answers: ["H₃O⁺, OH⁺", "OH⁻, H₃O⁻", "OH⁻, H⁺", "H₃O⁺, OH⁻", "H₃O⁻, OH⁻"],
      correctAnswerIndex: 3,
    },
    {
      question:
        "Which of the following does not fit the definition of a Brønsted Acid?",
      answers: ["H₃PO₄", "H₂PO₄⁻", "H₂O", "NH₄⁺", "CO₂"],
      correctAnswerIndex: 4,
    },
    {
      question: "Identify the conjugate base of HPO₄²⁻",
      answers: ["H₂O", "H₂PO₄⁻", "H₃PO₄", "PO₄³⁻", "OH⁻"],
      correctAnswerIndex: 3,
    },
    {
      question: "Identify the conjugate acid of SO₄²⁻",
      answers: ["H2SO₄", "HSO₄⁻", "H₂SO₃", "H₃O⁺", "SO₃²⁻"],
      correctAnswerIndex: 1,
    },
    {
      question: "Identify the conjugate acid of CO₃²⁻",
      answers: ["H₂CO₃", "HCO₃⁻", "H₂O", "H₃O⁺", "CO₂"],
      correctAnswerIndex: 1,
    },
    {
      question: "Which one of these statements about strong acids is true?",
      answers: [
        "All strong acids have H atoms bonded to electronegative oxygen atoms",
        "Strong acids are 100% ionized in water",
        "The conjugate base of a strong acid is itself a strong base",
        "Strong acids are very concentrated acids",
        "Strong acids produce solutions with a higher pH than weak acids",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Calculate the pH of a carbonated beverage in which the hydrogen ion concentration is 3.4 x 10⁻⁴ M",
      answers: ["2.34", "3.47", "6.01", "7.99", "10.53"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Calculate the H⁺ ion concentration in lemon juice having a pH of 2.40",
      answers: ["4.0 x 10⁻² M", "250 M", "0.38 M", "4.0 x 10⁻³ M", "12 M"],
      correctAnswerIndex: 3,
    },
    {
      question: "Calculate the pH of a 3.5 x 10⁻³ M HNO3 solution",
      answers: ["–2.46", "0.54", "2.46", "3.00", "3.46"],
      correctAnswerIndex: 2,
    },
    {
      question: "What is the pH of 10.0 mL of 0.0020 M HCl?",
      answers: ["0.70", "2.70", "3.70", "5.70", "10.0"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Calculate the pH of a 0.14 M HNO₂ solution that is 5.7% ionized",
      answers: ["0.85", "1.70", "2.10", "11.90", "13.10"],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Calculate the pH of a 0.10 M HCN solution that is 0.0070% ionized",
      answers: ["1.00", "0.00070", "3.15", "5.15", "7.00"],
      correctAnswerIndex: 3,
    },
  ],
  redox: [
    {
      question:
        "What is the total number of moles (n) of electrons exchanged between the oxidizing agent and the reducing agent in the overall redox equation: 5 Ag⁺(aq) + Mn²⁺(aq) + 4H₂O(l) -> 5Ag(s) + MnO₄⁻(aq) + 8H⁺(aq)",
      answers: ["1", "2", "3", "5", "7"],
      correctAnswerIndex: 3,
    },
    {
      question:
        "What is the total number of moles (n) of electrons exchanged between the oxidizing agent and the reducing agent in the overall redox equation: Cr₂O₇²-(aq) + 6Fe²⁺(aq) + 14H⁺(aq) -> 2Cr³⁺(aq) + 6Fe³⁺(aq) + 7H₂O(l)",
      answers: ["1", "2", "3", "6", "12"],
      correctAnswerIndex: 3,
    },
    {
      question:
        "Complete and balance the following redox equation. When properly balanced using the smallest whole-number coefficients, the coefficient of S is H₂S + HNO₃ -> S + NO (acidic solution)",
      answers: ["1", "2", "3", "5", "6"],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Complete and balance the following redox equation using the smallest whole-number coefficients. What is the coefficient of Sn in the balanced equation? Sn + HNO₃ -> SnO₂ + NO₂ + H₂O (acidic solution)",
      answers: ["1", "2", "3", "4", "5"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Complete and balance the following redox equation. What is the coefficient of H2O when the equation is balanced using the set of smallest whole-number coefficients? MnO₄⁻ + SO₃²– -> Mn²⁺ + SO₄²⁻ (acidic solution)",
      answers: ["3", "4", "5", "8", "None of these"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Complete and balance the following redox equation. What is the coefficient of H2S when the equation is balanced using the set of smallest whole-number coefficients? H₂S + MnO₄⁻ -> Mn²⁺ + SO₄²⁻ (acidic solution)",
      answers: ["1", "2", "4", "5", "None of these"],
      correctAnswerIndex: 3,
    },
    {
      question:
        "Complete and balance the following redox equation. What is the coefficient of H2O when the equation is balanced with the set of smallest whole-number coefficients? H₂O + MnO₄⁻ + I⁻ -> MnO₂ + IO₃⁻ (basic solution)",
      answers: ["1", "2", "4", "10", "None of these"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Complete and balance the following redox equation. What is the coefficient of OH– when the equation is balanced using the set of smallest whole-number coefficients? MnO₄⁻ + I⁻ ->  MnO₂ + IO₃⁻ (basic solution)",
      answers: ["1", "2", "4", "10", "None of these"],
      correctAnswerIndex: 1,
    },
    {
      question: "Which of the following is true concerning a galvanic cell?",
      answers: [
        "Oxidation occurs at the anode and is where anions move towards",
        "Oxidation occurs at the cathode and is where anions move towards",
        "Oxidation occurs at the anode and is where cations move towards",
        "Oxidation occurs at the cathode and is where cations move towards",
        "Reduction occurs at the anode and is where anions move towards",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Which of the following is true concerning a galvanic cell?",
      answers: [
        "Reduction occurs at the anode and is where anions move towards",
        "Reduction occurs at the cathode and is where anions move towards",
        "Reduction occurs at the cathode and is where cations move towards",
        "Oxidation occurs at the anode and is where cations move towards",
        "Oxidation occurs at the cathode and is where cations move towards",
      ],
      correctAnswerIndex: 2,
    },
  ],
};

export default questions;
