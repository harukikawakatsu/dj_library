# Generated by Django 4.2.11 on 2024-07-13 07:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('name', models.TextField()),
                ('artist', models.TextField()),
                ('danceability', models.FloatField()),
                ('energy', models.FloatField()),
                ('key', models.IntegerField()),
                ('loudness', models.FloatField()),
                ('mode', models.IntegerField()),
                ('speechiness', models.FloatField()),
                ('acousticness', models.FloatField()),
                ('instrumentalness', models.FloatField()),
                ('liveness', models.FloatField()),
                ('valence', models.FloatField()),
                ('tempo', models.FloatField()),
            ],
        ),
    ]
