# Generated by Django 3.0.5 on 2020-10-02 09:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scraper', '0013_auto_20201002_1143'),
    ]

    operations = [
        migrations.AlterField(
            model_name='incidents',
            name='geo_lat',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='incidents',
            name='geo_long',
            field=models.FloatField(null=True),
        ),
    ]