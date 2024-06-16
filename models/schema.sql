create database dad_jokes_db;
use dad_jokes_db;
create table jokes
(
    id int
    auto_increment not null,
name varchar
    (250) null,
punchline varchar
    (250) null,
genre varchar
    (250) null, 
rating varchar
    (250),   
primary key
    (id)
);

    --Jokester table, use this to get the total number of jokes in a ranking--
    create table jokesters
    (
        id int
        auto_increment not NULL,
 email varchar
        (250),
 password varchar
        (250),
 primary key
        (id)
);

        INSERT INTO jokes
            (name, punchline, genre)
        VALUES
            ("I'm tired of following my dreams.", "I'm just going to ask them where they are going and meet up with them later.", "joke");
        INSERT INTO jokes
            (name, punchline, genre)
        VALUES
            ("Did you hear about the guy whose whole left side was cut off?", "He's all right now.", "joke");
        INSERT INTO jokes
            (name, punchline, genre)
        VALUES
            ("Why didn’t the skeleton cross the road?", "Because he had no guts.", "joke");
        INSERT INTO jokes
            (name, punchline, genre)
        VALUES
            ("What did one nut say as he chased another nut?", "I'm a cashew!", "joke");
        INSERT INTO jokes
            (name, punchline, genre)
        VALUES
            ("How come the stadium got hot after the game?", "Because all of the fans left.", "joke")