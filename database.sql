CREATE DATABASE trickysusan;

CREATE TABLE news(
    post_id SERIAL PRIMARY KEY,
    date DATE,
    post VARCHAR(1000)
);

INSERT INTO news (date, post)
VALUES ('14/07/2020', 'Let’s face it - COVID-19 continues to be a major prick. We’re working really hard to establish which venues will have us back as soon as possible, so we can provide the antidote to all this BS – a large and loud dose of Tricky Susan.<br><br>In the meanwhile we’ve been in the recording studio laying down our latest tracks. Watch this space ...<br><br><div class="center"><h1>KA-POW.</h1></div>');

INSERT INTO news (date, post)
VALUES ('17/09/2020', 'Another date');
