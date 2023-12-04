-- Adminer 4.8.1 PostgreSQL 15.1 dump

DROP TABLE IF EXISTS "bad_answer";
DROP SEQUENCE IF EXISTS bad_answer_id_seq;
CREATE SEQUENCE bad_answer_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."bad_answer" (
    "id" integer DEFAULT nextval('bad_answer_id_seq') NOT NULL,
    "title" character varying NOT NULL,
    "help_percentage" integer NOT NULL,
    "question_id" integer,
    CONSTRAINT "PK_0de74f8009834c28b60f1f26ff2" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "bad_answer" ("id", "title", "help_percentage", "question_id") VALUES
(132,	'Le désert de Gobi',	8,	44),
(38,	'Arctique',	10,	14),
(127,	'Saturne',	5,	42),
(46,	'Huascarán',	30,	15),
(92,	'La grande barrière de corail',	10,	31),
(44,	'Milan',	20,	10),
(18,	'Elbrus',	12,	6),
(96,	'Mars',	15,	32),
(30,	'Naruhito',	15,	11),
(122,	'E Pluribus Unum',	0,	41),
(40,	'Indien',	15,	14),
(41,	'Ojos del Salado',	15,	15),
(93,	'La forêt amazonienne',	45,	31),
(50,	'Vert',	0,	17),
(51,	'Rouge',	0,	17),
(52,	'Jaune',	0,	17),
(57,	'L''Europe',	0,	19),
(61,	'Michel-Ange',	0,	20),
(66,	'Mexique',	0,	22),
(67,	'Chine',	0,	22),
(71,	'Le Mississippi',	0,	24),
(79,	'Brisbane',	0,	26),
(104,	'L''océan Atlantique',	0,	35),
(105,	'L''océan Indien',	0,	35),
(106,	'L''océan Arctique',	0,	35),
(90,	'Vénus',	5,	30),
(91,	'Pluton',	35,	30),
(6,	'Barack Obama',	3,	2),
(7,	'Hillary Clinton',	2,	2),
(5,	'Donald Trump',	10,	2),
(13,	'10',	5,	4),
(10,	'O3',	0,	3),
(8,	'H2O2',	5,	3),
(9,	'CO2',	25,	3),
(16,	'Betelgeuse',	7,	5),
(11,	'6',	15,	4),
(12,	'8',	15,	4),
(15,	'UY Scuti',	35,	5),
(14,	'Soleil',	3,	5),
(43,	'Mont Saint Elias',	2,	6),
(17,	'Mont Everest',	1,	6),
(24,	'Forêt boréale',	20,	8),
(23,	'Forêt tropicale humide',	0,	8),
(22,	'Sibérie',	5,	8),
(26,	'Delhi',	5,	9),
(25,	'New York',	0,	9),
(27,	'Shanghai',	30,	9),
(29,	'Madrid',	0,	10),
(28,	'Naple',	0,	10),
(31,	'Shinzo Abe',	37,	11),
(32,	'Yoshihide Suga',	3,	11),
(78,	'Melbourne',	5,	26),
(34,	'Au',	10,	12),
(97,	'Jupiter',	5,	32),
(47,	'Valencia',	7,	16),
(89,	'Jupiter',	15,	30),
(95,	'Vénus',	5,	32),
(48,	'Seville',	3,	16),
(49,	'Malaga',	0,	16),
(98,	'Victor Hugo',	20,	33),
(99,	'Gustave Flaubert',	15,	33),
(100,	'Honoré de Balzac',	5,	33),
(101,	'Islande',	17,	34),
(102,	'Nouvelle-Zélande',	25,	34),
(103,	'Madagascar',	18,	34),
(56,	'L''Antarctique',	20,	19),
(58,	'L''Afrique',	30,	19),
(59,	'Vincent van Gogh',	15,	20),
(60,	'Pablo Picasso',	15,	20),
(107,	'Euclide',	10,	36),
(108,	'Archimède',	25,	36),
(109,	'René Descartes',	5,	36),
(62,	'Dioxyde de carbone',	3,	21),
(63,	'Oxygène',	50,	21),
(64,	'Hélium',	2,	21),
(110,	'Vincent van Gogh',	20,	37),
(111,	'Pablo Picasso',	20,	37),
(112,	'Salvador Dalí',	10,	37),
(65,	'Grèce',	10,	22),
(68,	'Charles Dickens',	22,	23),
(69,	'Jane Austen',	28,	23),
(70,	'J.K. Rowling',	5,	23),
(113,	'Alexandrie',	40,	38),
(114,	'Gizeh',	5,	38),
(115,	'Assouan',	10,	38),
(72,	'Le Danube',	35,	24),
(73,	'L''Amazone',	10,	24),
(116,	'Christopher Marlowe',	17,	39),
(117,	'George Bernard Shaw',	13,	39),
(118,	'Oscar Wilde',	10,	39),
(74,	'Ag',	5,	25),
(75,	'Fe',	10,	25),
(76,	'Cu',	35,	25),
(119,	'Le mont Kilimandjaro',	30,	40),
(120,	'Le mont McKinley (Denali)',	5,	40),
(121,	'Le mont Blanc',	10,	40),
(123,	'In Liberty We Trust',	40,	41),
(124,	'United We Stand',	5,	41),
(77,	'Sydney',	40,	26),
(35,	'Cu',	5,	12),
(33,	'Ar',	30,	12),
(125,	'Uranus',	30,	42),
(126,	'Pluton',	25,	42),
(80,	'Albert Einstein',	35,	27),
(81,	'Galilée',	5,	27),
(82,	'Marie Curie',	5,	27),
(83,	'Égalité, fraternité, solidarité',	40,	28),
(84,	'Liberté, équité, amitié',	15,	28),
(85,	'Justice, unité, paix',	5,	28),
(128,	'Linus Pauling',	15,	43),
(129,	'Rosalind Franklin',	25,	43),
(130,	'Albert Einstein',	30,	43),
(86,	'Marcel Proust',	25,	29),
(87,	'Victor Hugo',	25,	29),
(88,	'Georges Simenon',	5,	29),
(36,	'Springbok',	3,	13),
(37,	'Antilope pronghorn',	7,	13),
(45,	'Léopard',	40,	13),
(131,	'Le Sahara',	37,	44),
(39,	'Atlantique',	5,	14),
(42,	'Monte Pissis',	25,	15),
(94,	'Le Grand Canyon',	0,	31),
(163,	'Marseille',	0,	56),
(164,	'Liege',	0,	56),
(162,	'Berlin',	0,	56),
(133,	'Le désert d''Atacama',	15,	44),
(134,	'Jorge Luis Borges',	10,	45),
(135,	'Mario Vargas Llosa',	30,	45),
(136,	'Julio Cortázar',	25,	45),
(137,	'La Réunion',	30,	46),
(138,	'Zanzibar',	15,	46),
(139,	'Les Seychelles',	25,	46);

DROP TABLE IF EXISTS "game";
DROP SEQUENCE IF EXISTS game_id_seq;
CREATE SEQUENCE game_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."game" (
    "id" integer DEFAULT nextval('game_id_seq') NOT NULL,
    "points" integer NOT NULL,
    "questionNb" integer NOT NULL,
    "created_at" timestamp,
    "user_id" integer,
    "levelDifficulty_id" integer,
    CONSTRAINT "PK_352a30652cd352f552fef73dec5" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "game_helps_help";
CREATE TABLE "public"."game_helps_help" (
    "gameId" integer NOT NULL,
    "helpId" integer NOT NULL,
    CONSTRAINT "PK_0d58f1982cbfabfe8d05151554a" PRIMARY KEY ("gameId", "helpId")
) WITH (oids = false);

CREATE INDEX "IDX_92e772d7a31cef8c92cd85bdc5" ON "public"."game_helps_help" USING btree ("helpId");

CREATE INDEX "IDX_ffa1aaa6eec5a02f730714488d" ON "public"."game_helps_help" USING btree ("gameId");


DROP TABLE IF EXISTS "good_answer";
DROP SEQUENCE IF EXISTS good_answer_id_seq;
CREATE SEQUENCE good_answer_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."good_answer" (
    "id" integer DEFAULT nextval('good_answer_id_seq') NOT NULL,
    "title" character varying NOT NULL,
    "help_percentage" integer NOT NULL,
    "question_id" integer,
    CONSTRAINT "PK_16c2d673f6226bbef3f26b6b9c3" PRIMARY KEY ("id"),
    CONSTRAINT "REL_60244dcba737f23644da9dc8b5" UNIQUE ("question_id")
) WITH (oids = false);

INSERT INTO "good_answer" ("id", "title", "help_percentage", "question_id") VALUES
(17,	'Bleu',	100,	17),
(2,	'Joe Biden',	85,	2),
(3,	'H2O',	70,	3),
(4,	'7',	65,	4),
(5,	'VY Canis Majoris',	55,	5),
(6,	'Mont Blanc',	85,	6),
(8,	'Amazonie',	75,	8),
(9,	'Tokyo',	65,	9),
(10,	'Rome',	80,	10),
(11,	'Fumio Kishida',	45,	11),
(12,	'Ag',	55,	12),
(14,	'Pacifique',	70,	14),
(21,	'L''azote',	45,	21),
(22,	'L''Égypte',	90,	22),
(25,	'Au',	50,	25),
(26,	'Canberra',	55,	26),
(28,	'Liberté, égalité, fraternité',	40,	28),
(30,	'Mars',	45,	30),
(35,	'Groenland',	40,	34),
(36,	'L''océan Pacifique',	75,	35),
(37,	'Pythagore',	60,	36),
(38,	'Claude Monet',	50,	37),
(39,	'Le Caire',	45,	38),
(44,	'Francis Crick',	30,	43),
(46,	'Gabriel García Márquez',	35,	45),
(59,	'Paris',	100,	56),
(33,	'Mercure',	75,	32),
(16,	'Madrid',	90,	16),
(34,	'Alexandre Dumas',	60,	33),
(19,	'L''Asie',	50,	19),
(20,	'Léonard de Vinci',	70,	20),
(23,	'William Shakespeare',	45,	23),
(24,	'Le Nil',	55,	24),
(40,	'William Shakespeare',	60,	39),
(41,	'Le mont Everest',	55,	40),
(42,	'In God We Trust',	55,	41),
(43,	'Neptune',	40,	42),
(27,	'Isaac Newton',	55,	27),
(29,	'Antoine de Saint-Exupéry',	45,	29),
(13,	'Guépard',	50,	13),
(45,	'L''Antarctique',	40,	44),
(47,	'Madagascar',	30,	46),
(15,	'Aconcagua',	30,	15),
(31,	'L''arbre de Pando',	45,	31);

DROP TABLE IF EXISTS "help";
DROP SEQUENCE IF EXISTS help_id_seq;
CREATE SEQUENCE help_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."help" (
    "id" integer DEFAULT nextval('help_id_seq') NOT NULL,
    "name" character varying NOT NULL,
    CONSTRAINT "PK_d7976c3b54f32927ae1803e83cb" PRIMARY KEY ("id"),
    CONSTRAINT "UQ_86f516b4ddfe81a125932c61f05" UNIQUE ("name")
) WITH (oids = false);

INSERT INTO "help" ("id", "name") VALUES
(1,	'call_home'),
(2,	'50%'),
(3,	'public_help');

DROP TABLE IF EXISTS "home_help";
DROP SEQUENCE IF EXISTS home_help_id_seq;
CREATE SEQUENCE home_help_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."home_help" (
    "id" integer DEFAULT nextval('home_help_id_seq') NOT NULL,
    "description" text NOT NULL,
    "question_id" integer,
    CONSTRAINT "PK_07920837d261c385e7c3550b9fe" PRIMARY KEY ("id"),
    CONSTRAINT "REL_583c772c8d17afb81dc75b3be1" UNIQUE ("question_id")
) WITH (oids = false);

INSERT INTO "home_help" ("id", "description", "question_id") VALUES
(2,	'Le symbole chimique de l''eau est H2O, composé d''hydrogène et d''oxygène.',	3),
(4,	'Le symbole chimique de l''argent est Ag, provenant de son nom latin ''argentum''.',	12),
(5,	'L''animal le plus rapide sur Terre est le guépard.',	13),
(9,	'Je ne peux pas répondre à cette question.',	9),
(10,	'Je ne sais pas qui est le premier ministre actuel du Japon, je suis désolé.',	11),
(11,	'Pour trouver le nombre de continents sur Terre, pensez à l''initiale de chaque continent et comptez-les.',	4),
(12,	'L''empire romain est lié à cette ville en tant qu''ancienne capitale.',	10),
(13,	'La plus haute montagne d''Amérique du Sud est située en Argentine, elle s''appelle...',	15),
(6,	'Je suis désolé, je ne sais pas qui est le président actuel des États-Unis.',	2),
(14,	'Je ne suis pas sûr de la réponse à cette question, mais je pense que c''est le Soleil.',	5),
(3,	'La plus haute montagne d''Europe est le Mont Blanc.',	6),
(8,	'Je ne peux pas répondre à cette question, je suis désolé.',	8),
(15,	'Je pense que c''est l’océan indien.',	14),
(17,	'La capitale de l''Espagne est Madrid.',	16),
(18,	' La couleur du ciel par temps clair est le bleu.',	17),
(20,	' Il est situé en Eurasie.',	19),
(21,	'C''est l''un des artistes de la Renaissance les plus célèbres.',	20),
(22,	'Cette information m''échappe.',	21),
(23,	'C''est en Afrique du Nord.',	22),
(24,	'"Roméo et Juliette" a été écrit par William Shakespeare.',	23),
(25,	'Elle traverse l''Afrique du nord au nord-est.',	24),
(26,	'Il provient du mot latin "aurum."',	25),
(27,	'La capitale de l''Australie est Canberra.',	26),
(28,	'La gravité a été découverte par Isaac Newton en observant une pomme tomber d''un arbre.',	27),
(29,	'Cette information est hors de ma portée.',	28),
(30,	'Je n''ai pas connaissance de cette réponse.',	29),
(31,	' La planète surnommée la "planète rouge" en raison de sa couleur est Mars.',	30),
(32,	'Il s''agit d''un organisme végétal très ancien.',	31),
(33,	'La planète la plus proche du soleil est Mercure.',	32),
(34,	'C''est un auteur français du 19e siècle.',	33),
(35,	'Elle est située dans l''océan Arctique.',	34),
(36,	'Il couvre plus d''un tiers de la surface de la planète.',	35),
(37,	'Je n''ai pas cette information.',	36),
(38,	'C''est un artiste impressionniste français.',	37),
(39,	'La capitale de l''Égypte est Le Caire.',	38),
(40,	'Cette information est hors de ma portée.',	39),
(46,	'Elle est située au large de la côte est de l''Afrique.',	46),
(45,	'C''est un écrivain colombien renommé.',	45),
(44,	'Le plus grand désert du monde en termes de superficie est l''Antarctique.',	44),
(43,	'Je n''ai pas connaissance de cette réponse.',	43),
(42,	'Elle porte le nom d''un dieu romain des mers.',	42),
(41,	'La devise des États-Unis d''Amérique est "In God We Trust."',	41),
(47,	'Il est situé dans la chaîne de l''Himalaya.',	40),
(58,	'La capitale de la France est Paris.',	56);

DROP TABLE IF EXISTS "level_difficulty";
DROP SEQUENCE IF EXISTS level_difficulty_id_seq;
CREATE SEQUENCE level_difficulty_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."level_difficulty" (
    "id" integer DEFAULT nextval('level_difficulty_id_seq') NOT NULL,
    "level" character varying NOT NULL,
    CONSTRAINT "PK_45e7c8ccd805f3f88e2e1e8a269" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "level_difficulty" ("id", "level") VALUES
(1,	'easy'),
(2,	'hard');

DROP TABLE IF EXISTS "question";
DROP SEQUENCE IF EXISTS question_id_seq;
CREATE SEQUENCE question_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."question" (
    "id" integer DEFAULT nextval('question_id_seq') NOT NULL,
    "title" text NOT NULL,
    "award" integer NOT NULL,
    "level_difficulty_id" integer,
    CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "question" ("id", "title", "award", "level_difficulty_id") VALUES
(3,	'Quel est le symbole chimique de l''eau ?',	3,	1),
(4,	'Quel est le nombre de continents sur Terre ?',	4,	1),
(6,	'Quel est le nom de la plus haute montagne d''Europe ?',	6,	1),
(8,	'Quel est le nom de la plus grande forêt du monde ?',	8,	1),
(9,	'Quel est le nom de la plus grande ville du monde ?',	9,	1),
(11,	'Quel est le nom du premier ministre actuel du Japon ?',	11,	1),
(14,	'Quel est le nom de l''océan le plus profond du monde ?',	14,	1),
(15,	'Quel est le nom de la plus haute montagne d''Amérique du Sud ?',	15,	1),
(13,	'Quel est le nom de l''animal le plus rapide sur terre ?',	13,	1),
(5,	'Quel est le nom de la plus grande étoile connue ?',	12,	1),
(10,	'Quelle est la capitale de l''Italie ?',	5,	1),
(12,	'Quel est le symbole chimique de l''argent ?',	10,	1),
(19,	'Quel est le plus grand continent du monde ?',	3,	1),
(20,	'Qui a peint la Joconde ?',	4,	1),
(21,	'Quel est le gaz le plus abondant dans l''atmosphère terrestre ?',	5,	1),
(22,	'Quel pays est célèbre pour ses pyramides, dont la pyramide de Khéops ?',	6,	1),
(23,	'Qui a écrit "Roméo et Juliette" ?',	7,	1),
(24,	'Quelle est la plus longue rivière du monde ?',	8,	1),
(25,	'Quel est le symbole chimique de l''or ?',	9,	1),
(26,	'Quelle est la capitale de l''Australie ?',	10,	1),
(27,	'Qui a découvert la gravité en observant une pomme tomber d''un arbre ?',	11,	1),
(28,	'Quelle est la devise de la République française ?',	12,	1),
(29,	'Qui a écrit "Le Petit Prince" ?',	13,	1),
(30,	'Quelle planète est surnommée la "planète rouge" en raison de sa couleur ?',	14,	1),
(31,	'Quel est le plus grand organisme vivant sur Terre ?',	15,	1),
(32,	'Quel est le nom de la planète la plus proche du soleil ?',	1,	2),
(33,	'Qui a écrit le roman "Le Comte de Monte-Cristo" ?',	2,	2),
(34,	'Quelle est la plus grande île du monde ?',	3,	2),
(35,	'Quel est le plus grand océan de la Terre ?',	4,	2),
(36,	'Quel célèbre mathématicien est connu pour son "Théorème de Pythagore" ?',	5,	2),
(37,	'Qui a peint le tableau "Les Nymphéas" ?',	6,	2),
(38,	'Quelle est la capitale de l''Égypte ?',	7,	2),
(39,	'Qui a écrit la pièce de théâtre "Hamlet" ?',	8,	2),
(40,	'Quel est le plus haut sommet du monde ?',	9,	2),
(41,	'Quelle est la devise des États-Unis d''Amérique ?',	10,	2),
(42,	'Quelle est la planète la plus éloignée du système solaire ?',	11,	2),
(43,	'Qui a découvert la structure de l''ADN avec James Watson ?',	12,	2),
(44,	'Quel est le plus grand désert du monde en termes de superficie ?',	13,	2),
(45,	'Qui a écrit le roman "Cent ans de solitude" ?',	14,	2),
(46,	'Quelle est la plus grande île de l''océan Indien et le deuxième plus grand après le Groenland ?',	15,	2),
(56,	'Quelle est la capitale de la France ?',	1,	1),
(16,	'Quelle est la capitale de l''Espagne ?',	2,	1),
(2,	'Quel est le nom du président actuel des États-Unis ?',	2,	1),
(17,	'Quelle est la couleur du ciel par temps clair ?',	1,	1);

DROP TABLE IF EXISTS "role";
DROP SEQUENCE IF EXISTS role_id_seq;
CREATE SEQUENCE role_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."role" (
    "id" integer DEFAULT nextval('role_id_seq') NOT NULL,
    "name" character varying NOT NULL,
    CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"),
    CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name")
) WITH (oids = false);

INSERT INTO "role" ("id", "name") VALUES
(2,	'ADMIN'),
(3,	'USER'),
(1,	'SUPER_ADMIN');

DROP TABLE IF EXISTS "user";
DROP SEQUENCE IF EXISTS user_id_seq;
CREATE SEQUENCE user_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."user" (
    "id" integer NOT NULL,
    "username" character varying NOT NULL,
    "email" character varying NOT NULL,
    "password" character varying NOT NULL,
    "points" integer,
    "reset_password_token" character varying,
    "role_id" integer,
    CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"),
    CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"),
    CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")
) WITH (oids = false);


INSERT INTO "user" ("username", "email", "password", "points", "reset_password_token", "role_id") VALUES
('John Doe',	'johndoe@example.com',	'$2y$10$/Xxu6GDQeFV5g4LkjcTQXO0mGz5HfEKzvYUU07ZNt4cW82eOlI3FG',	10,	NULL,	3),
('Marie Dupont',	'mariedupont@example.com',	'$2a$12$jlUtr4Gfy7RjX5siTllto.zGBWE2Kjc0/okuC71zalSCGaFPFXgFa',	30,	NULL,	3),
('Jane Doe',	'janedoe@example.com',	'password',	20,	NULL,	3),
('Pierre Durand',	'pierredurand@example.com',	'password',	40,	NULL,	3),
('Sophie Martin',	'sophiemartin@example.com',	'password',	50,	NULL,	3),
('Thomas Dufour',	'thomasdufour@example.com',	'password',	60,	NULL,	3),
('Lucie Laroche',	'lucielaroche@example.com',	'password',	70,	NULL,	3),
('Marc Leblanc',	'marcleblanc@example.com',	'password',	80,	NULL,	3),
('Camille Rousseau',	'camillerousseau@example.com',	'password',	90,	NULL,	3),
('Alexandre Martin',	'alexandremartin@example.com',	'password',	100,	NULL,	3),
('Amandine Dupont',	'amandinedupont@example.com',	'password',	110,	NULL,	3),
('Benjamin Durand',	'benjamindurand@example.com',	'password',	120,	NULL,	3),
('Claire Martin',	'clairemartin@example.com',	'password',	130,	NULL,	3),
('David Dufour',	'daviddufour@example.com',	'password',	140,	NULL,	3),
('Elise Laroche',	'eliselaroche@example.com',	'password',	150,	NULL,	3),
('François Leblanc',	'francoisleblanc@example.com',	'password',	160,	NULL,	3),
('Gabrielle Rousseau',	'gabriellerousseau@example.com',	'password',	170,	NULL,	3),
('Hugo Martin',	'hugomartin@example.com',	'password',	180,	NULL,	3),
('Ines Dupont',	'inesdupont@example.com',	'password',	190,	NULL,	3),
('Julie Durand',	'juliedurand@example.com',	'password',	200,	NULL,	3),
('admin',	'admin@gmail.com',	'$2b$10$dTaTGqhAM974L.F/i6rYxOe4ZMB2cbG42W.WIG8Cl42P.vTsc2WoO',	500,	NULL,	2),
('super-admin',	'superadmin@gmail.com',	'$2b$10$8egEcsMzo7kioK3o7yZOM.lKhgvaFeuoW51B5s7oEvtBR4CjLdM3q',	3015,	NULL,	1);

ALTER TABLE ONLY "public"."bad_answer" ADD CONSTRAINT "FK_25e5203fdb629e37abe1d325f46" FOREIGN KEY (question_id) REFERENCES question(id) NOT DEFERRABLE;

ALTER TABLE ONLY "public"."game" ADD CONSTRAINT "FK_0744ead8ea37cf3325c971f5f18" FOREIGN KEY (user_id) REFERENCES "user"(id) NOT DEFERRABLE;
ALTER TABLE ONLY "public"."game" ADD CONSTRAINT "FK_ebd9dc4f018d96efcfae14581d6" FOREIGN KEY ("levelDifficulty_id") REFERENCES level_difficulty(id) NOT DEFERRABLE;

ALTER TABLE ONLY "public"."game_helps_help" ADD CONSTRAINT "FK_92e772d7a31cef8c92cd85bdc54" FOREIGN KEY ("helpId") REFERENCES help(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."good_answer" ADD CONSTRAINT "FK_60244dcba737f23644da9dc8b59" FOREIGN KEY (question_id) REFERENCES question(id) NOT DEFERRABLE;

ALTER TABLE ONLY "public"."home_help" ADD CONSTRAINT "FK_583c772c8d17afb81dc75b3be14" FOREIGN KEY (question_id) REFERENCES question(id) NOT DEFERRABLE;

ALTER TABLE ONLY "public"."question" ADD CONSTRAINT "FK_d8a13fa0a9e327e17e3df7d988a" FOREIGN KEY (level_difficulty_id) REFERENCES level_difficulty(id) NOT DEFERRABLE;

ALTER TABLE ONLY "public"."user" ADD CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561" FOREIGN KEY (role_id) REFERENCES role(id) NOT DEFERRABLE;

-- 2023-11-29 14:51:56.604224+00
