// Objectif : Faire tomber un maximum de quilles (pins) en lançant une boule sur une piste.

// Partie : Composée de 10 frames (tours).

// Chaque frame : Le joueur a droit à 2 lancers pour faire tomber les 10 quilles.

// Strike : Si toutes les quilles tombent au 1er lancer, c’est un strike. Le score de la frame = 10 + total des quilles tombées aux 2 lancers suivants. (X)

// Spare : Si toutes les quilles tombent en 2 lancers, c’est un spare. Le score = 10 + nombre de quilles tombées au lancer suivant. (/)

// Score : Addition des points de chaque frame, avec bonus pour strikes et spares.

// 10e frame : Si strike ou spare, le joueur a droit à un ou deux lancers supplémentaires pour calculer le score final.


import { scoreBowling } from './bowling';

describe('Calcul du score au bowling', () => {
    it('doit retourner 0 si tous les lancers échouent', () => {
        expect(scoreBowling('--------------------')).toBe(0);
    });

    it('doit retourner 90 pour une partie composée uniquement de 9 suivis d’un raté', () => {
        expect(scoreBowling('9-9-9-9-9-9-9-9-9-9-')).toBe(90);
    });

    it('doit retourner 150 pour une partie composée uniquement de spares avec 5', () => {
        expect(scoreBowling('5/5/5/5/5/5/5/5/5/5/5')).toBe(150);
    });

    it('doit retourner 300 pour une partie parfaite', () => {
        expect(scoreBowling('XXXXXXXXXXXX')).toBe(300);
    });

    it('doit correctement calculer le score pour une séquence de lancers aléatoire', () => {
        expect(scoreBowling('X7/9-X-88/-6XXX81')).toBe(167);
    });
});
