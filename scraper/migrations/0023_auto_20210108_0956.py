# Generated by Django 3.1.4 on 2021-01-08 08:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scraper', '0022_auto_20210108_0944'),
    ]

    operations = [
        migrations.AlterField(
            model_name='incidents',
            name='monitorcode',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='incidents',
            name='incident_hash',
            field=models.CharField(blank=True, max_length=20, primary_key=True, serialize=False),
        ),
    ]