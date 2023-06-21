//Phaser settings
let config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    backgroundColor: '#ffffff',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload
    }
};

let gameObject;//Variable for the game object so it can be accessed anywhere, in any function.
let game = new Phaser.Game(config);//variable that contains the game

//Load in all the images
function preload() {
    //Sprites
    // this.load.image('PLACEHOLDER', '/img/sprites/PLACEHOLDER'); (template for assets)
    this.load.spritesheet('player', '/img/sprites/player.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('Xarzeth', '/img/sprites/Xarzeth.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('Mage', '/img/sprites/Mage.png', { frameWidth: 64, frameHeight: 64 });

    this.load.image('screenCover', '/img/worldMap/screenCover.png');
    this.load.tilemapTiledJSON('map', './world/firstMap.json');
    this.load.image('tiles', './world/tileset.png');

    this.load.image('Ice Trap', '/img/objects/iceCircle.png');

    this.load.spritesheet('Fire Ball', '/img/objects/fireProjectile.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('Flame', '/img/objects/flameBall.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('Sapphire shattering ultra omega (sus potion 3 am) blast', '/img/objects/crystalSpell.png', { frameWidth: 64, frameHeight: 64 });
}

//Game variables
let gameEnd = false;

//Collision variables
let interactablesCollision;
let interactables;
let toggleCollison = {};

let screenCover;//Variable for the screen cover
let points = 0;// phoebe
let num = 1;
let pointSystem = document.querySelector('.point-system'); //phoebe
let spellShowcase = document.querySelector('.current-spell'); //phoebe

let cooldownList;//List of spells in the cooldown

let teleporters;
const teleportLoad = [
    //[fromX, fromY, toX, toY]
    {
        fX: 800,
        fY: 1900,
        tX: 1300,
        tY: 190,
        hitboxPadding: { top: 0, left: -100, bottom: 0, right: -100 }
    }
];

//Player variables
let player;
let damageCooldown = false;

//List of sprites to be removed
let removedSprite = [];
//Enemy group
let enemies;

//All enemies, these get loaded in upon added them as an object,
const enemySprites = [
    {
        sprite: 'Xarzeth',
        spawn: [1500, 800],
        moveSpeed: 100,
        aggroDistance: [200, false],
        scale: 1.5,
        maxHp: 300,
        hp: 300,
        statusEffect: false,
        dmg: 15,
        attackMoves: [{ atk: 'jumpToPlayer', dmg: 40 }, { atk: 'fireballBarrage' }, { atk: 'dash', dmg: 25 }],
        attackRate: 50,
        attackCooldown: false,
        spellContact: false,
        moving: false,
        pauseAnimations: false,
        cancelAnimations: false,
        dmgCooldown: false,
        hitboxPadding: { top: 8, left: 12, bottom: 0, right: 12 }
    },
    {
        sprite: 'player',
        spawn: [300, 800],
        moveSpeed: 100,
        aggroDistance: [300, null],
        scale: 1,
        maxHp: 100,
        hp: 100,
        statusEffect: false,
        dmg: 10,
        attackMoves: [{ atk: 'jumpToPlayer', dmg: 30 }],
        attackRate: 100,
        attackCooldown: false,
        spellContact: false,
        moving: false,
        pauseAnimations: false,
        cancelAnimations: false,
        dmgCooldown: false,
        hitboxPadding: { top: 8, left: 12, bottom: 0, right: 12 }
    },
    {
        sprite: 'Mage',
        spawn: [600, 1750],
        moveSpeed: 100,
        aggroDistance: [300, false],
        scale: 1,
        maxHp: 150,
        hp: 125,
        statusEffect: false,
        dmg: 10,
        attackMoves: [{ atk: 'Flame' }, { atk: 'fireball' }, { atk: 'fireballBarrage' }, { atk: 'smallHeal' }],
        attackRate: 100,
        attackCooldown: false,
        spellContact: false,
        moving: false,
        pauseAnimations: false,
        cancelAnimations: false,
        dmgCooldown: false,
        hitboxPadding: { top: 8, left: 12, bottom: 0, right: 12 }
    },
    {
        sprite: 'Mage',
        spawn: [400, 1750],
        moveSpeed: 110,
        aggroDistance: [300, false],
        scale: 1,
        maxHp: 150,
        hp: 125,
        statusEffect: false,
        dmg: 10,
        attackMoves: [{ atk: 'smallHeal' }, { atk: 'jumpToPlayer', dmg: 25 }, { atk: 'fireball' }, { atk: 'largeHeal' }],
        attackRate: 150,
        attackCooldown: false,
        spellContact: false,
        moving: false,
        pauseAnimations: false,
        cancelAnimations: false,
        dmgCooldown: false,
        hitboxPadding: { top: 8, left: 12, bottom: 0, right: 12 }
    },
    {
        sprite: 'Mage',
        spawn: [1850, 1850],
        moveSpeed: 75,
        aggroDistance: [400, null],
        scale: 1,
        maxHp: 100,
        hp: 100,
        statusEffect: false,
        dmg: 35,
        attackMoves: [{ atk: 'Flame' }, { atk: 'fireball' }, { atk: 'fireballBarrage' }],
        attackRate: 10,
        attackCooldown: false,
        spellContact: false,
        moving: false,
        pauseAnimations: false,
        cancelAnimations: false,
        dmgCooldown: false,
        hitboxPadding: { top: 8, left: 12, bottom: 0, right: 12 }
    }
];

//Spellcircles & spellattacks
const spellMoves = {
    circles: [//Spell spawning
        {
            sprite: 'Ice Trap',
            attackName: 'iceTrap',
            charge: 5,
            cooldown: 15,
            coolingDown: false,
            despawn: 10,
            activeOnTouch: true,
            disappearOnTouch: true,
            followCursor: true,
            isCircle: true,
            scale: 0.15,
            speed: 5,
            stun: 5,
            ignoreSprite: undefined,
            spellContact: false
        },
        {
            sprite: 'Fire Ball',
            attackName: 'fireProjectile',
            charge: false,
            cooldown: 2,
            coolingDown: false,
            despawn: 0.5,
            activeOnTouch: false,
            disappearOnTouch: true,
            followCursor: false,
            isCircle: true,
            scale: 0.1,
            speed: 5,
            ignoreSprite: undefined
        },
        {
            sprite: 'Flame',
            attackName: 'flameProjectile',
            charge: false,
            cooldown: 10,
            coolingDown: false,
            despawn: 0.5,
            activeOnTouch: false,
            disappearOnTouch: true,
            followCursor: false,
            isCircle: true,
            scale: 0.1,
            speed: 5,
            ignoreSprite: undefined,
        },
        {
            sprite: 'Sapphire shattering ultra omega (sus potion 3 am) blast',
            attackName: 'sapphireProjectile',
            charge: false,
            cooldown: 20,
            coolingDown: false,
            despawn: 0.1,
            activeOnTouch: false,
            disappearOnTouch: true,
            followCursor: false,
            isCircle: true,
            scale: 0,
            speed: 5,
            ignoreSprite: undefined,
        },
        {
            sprite: 'Small heal',
            attackName: undefined,
            charge: false,
            cooldown: 30,
            coolingDown: false,
            despawn: 0,
            activeOnTouch: false,
            disappearOnTouch: true,
            followCursor: false,
            isCircle: false,
            scale: 0,
            speed: 0,
            ignoreSprite: undefined,
        },
        {
            sprite: 'Large heal',
            attackName: 'flameProjectile',
            charge: false,
            cooldown: 150,
            coolingDown: false,
            despawn: 0.5,
            activeOnTouch: false,
            disappearOnTouch: true,
            followCursor: false,
            isCircle: false,
            scale: 0,
            speed: 0,
            ignoreSprite: undefined,
        }
    ],
    attacks: [//Spell attacks
        {
            sprite: 'iceTrap',
            attackName: 'iceTrap',
            dmg: 5,
            passiveDmg: { enabled: true, dmg: 2, dur: 10, timeout: 750 },
            chargeScale: 1,
            sizeScale: 1,
            duration: 5,
            ignoreSprite: undefined,
            spellContact: false,
        },
        {
            sprite: 'fireProjectile',
            attackName: 'fireProjectile',
            animationName: 'Fire Ball-spell',
            dmg: 10,
            passiveDmg: { enabled: false },
            chargeScale: 1,
            sizeScale: 1,
            duration: 5,
            disappearOnTouch: true,
            damageCooldown: 1,
            velocitySpeed: 115,
            hitboxPadding: { top: 16, left: 10, bottom: 16, right: 10 },
            ignoreSprite: undefined,
            spellContact: false,
        },
        {
            sprite: 'flameProjectile',
            attackName: 'flameProjectile',
            animationName: 'Flame-spell',
            dmg: 0,
            passiveDmg: {
                enabled: true, dmg: 2, dur: 15, timeout: 1000
            },
            chargeScale: 1,
            sizeScale: 1,
            duration: 5,
            disappearOnTouch: false,
            damageCooldown: 1,
            velocitySpeed: 65,
            hitboxPadding: { top: 5, left: 5, bottom: 5, right: 5 },
            ignoreSprite: undefined,
            spellContact: false,
        }
        ,
        {
            sprite: 'Sapphire shattering ultra omega (sus potion 3 am) blast',
            attackName: 'sapphireProjectile',
            animationName: 'Sapphire shattering ultra omega (sus potion 3 am) blast-spell',
            dmg: 20,
            passiveDmg: {
                enabled: false
            },
            chargeScale: 1,
            sizeScale: 0.1,
            duration: 10,
            disappearOnTouch: true,
            damageCooldown: 2,
            velocitySpeed: 25,
            hitboxPadding: { top: 0, left: 0, bottom: 0, right: 0 },
            ignoreSprite: undefined,
            spellContact: false,
        }
    ]
}

//Spell variables
let spells;
let temporarySpells;

let currentSpell = spellMoves.circles[1];
let spellCooldown = [];
let spellContact = false;
let spellCount = 0;


let dungeonEnemies;
let minigame1Enemies;
let minigame2Enemies;

//Movement variables
let cursors;

let keyA;
let keyS;
let keyD;
let keyW;

// const spacebar = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
let movementSpeed = 100;
let targetingSprites = [];