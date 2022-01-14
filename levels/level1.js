let level1;

function getLevel() {
    level1 = new level(
        [
            new chicken(),
            new chicken(),
            new chicken(),
        ],

        [
            new endBoss()
        ],

        [
            new clouds()
        ],
        [
            new backgroundObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
            new backgroundObjects('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
            new backgroundObjects('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
            new backgroundObjects('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

            new backgroundObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
            new backgroundObjects('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
            new backgroundObjects('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
            new backgroundObjects('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
            new backgroundObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
            new backgroundObjects('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
            new backgroundObjects('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
            new backgroundObjects('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),
            new backgroundObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),
            new backgroundObjects('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2),
            new backgroundObjects('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2),
            new backgroundObjects('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),
            new backgroundObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
            new backgroundObjects('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
            new backgroundObjects('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
            new backgroundObjects('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3),
            new backgroundObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 4),
            new backgroundObjects('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 4),
            new backgroundObjects('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 4),
            new backgroundObjects('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 4),

        ],

        [
            new bottle(),
            new bottle(),
            new bottle(),
            new bottle(),
            new bottle(),
            new bottle(),
            new bottle(),
            new bottle(),
            new bottle(),
            new bottle(),
        ],

        [
            new selectObjects(),
            new selectObjects(),
            new selectObjects(),
            new selectObjects(),
            new selectObjects()
        ]

    );
}