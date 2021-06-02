use aulanode;

ALTER TABLE movimento add column(
data DATETIME NOT NULL DEFAULT '2021-05-12 17:00:00');

ALTER TABLE movimento add column(
dataCriacao DATETIME NOT NULL DEFAULT '2021-05-12 17:00:00');