# Generated by Django 3.1.4 on 2021-01-08 12:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scraper', '0025_auto_20210108_1343'),
    ]

    operations = [
        migrations.AlterField(
            model_name='incidents',
            name='monitorcode',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]