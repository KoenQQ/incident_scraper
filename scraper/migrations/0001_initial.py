# Generated by Django 3.0.5 on 2020-09-29 11:31

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Incidents',
            fields=[
                ('title', models.CharField(max_length=250, primary_key=True, serialize=False)),
                ('url', models.CharField(max_length=250, unique=True)),
                ('description', models.CharField(max_length=350)),
                ('geolat', models.CharField(max_length=250)),
                ('geolong', models.CharField(max_length=250)),
                ('pubDate', models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'ordering': ['title'],
            },
        ),
    ]