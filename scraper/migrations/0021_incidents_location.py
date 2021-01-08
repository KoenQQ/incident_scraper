# Generated by Django 3.1.4 on 2021-01-06 11:21

import django.contrib.gis.db.models.fields
import django.contrib.gis.geos.point
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('scraper', '0020_auto_20210104_1827'),
    ]

    operations = [
        migrations.AddField(
            model_name='incidents',
            name='location',
            field=django.contrib.gis.db.models.fields.PointField(blank=True, default=django.contrib.gis.geos.point.Point(0, 0), srid=4326),
        ),
    ]
