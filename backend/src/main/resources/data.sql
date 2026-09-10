INSERT INTO walk_route (id, name, distance_metres)
VALUES
    (1, 'Alyth Den', 5200),
    (2, 'Kinpurney Hill', 7800),
    (3, 'Tarbat Ness', 10000);

INSERT INTO walk (id, walk_date, walk_route_id)
VALUES
    (1, '2026/01/01', 1),
    (2, '2026/01/01', 2),
    (3, '2026/09/07', 3);

INSERT INTO munro (id, name, altitude_metres)
VALUES
    (1, 'Mayar', 928),
    (2, 'Dreish', 947),
    (3, 'Sgùrr na Banachdich', 965),
    (4, 'Mount Keen', 939),
    (5, 'Ben More', 966),
    (6, 'Càrn Aosda', 917),
    (7, 'Càrn a'' Ghèoidh', 975),
    (8, 'The Cairnwell', 933),
    (9, 'Glas Maol', 1068),
    (10, 'Creag Leacach', 987);

INSERT INTO climbed_munro (id, climb_date, munro_id)
VALUES
    (1, '2017/12/24', 1),
    (2, '2017/12/24', 2),
    (3, '2019/08/10', 3),
    (4, '2021/04/24', 4),
    (5, '2024/10/29', 5),
    (6, '2025/07/12', 6),
    (7, '2025/07/12', 7),
    (8, '2025/07/12', 8),
    (9, '2025/07/12', 9),
    (10, '2025/07/12', 10);