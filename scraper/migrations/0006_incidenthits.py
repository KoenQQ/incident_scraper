# Generated by Django 3.1.4 on 2021-04-13 14:19

import django.contrib.gis.db.models.fields
import django.contrib.gis.geos.point
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scraper', '0005_auto_20210412_1043'),
    ]

    operations = [
        migrations.CreateModel(
            name='IncidentHits',
            fields=[
                ('monitorcode', models.CharField(blank=True, max_length=2500, null=True)),
                ('comment', models.CharField(blank=True, max_length=300, null=True)),
                ('priority_code', models.CharField(blank=True, max_length=100, null=True)),
                ('emergency_service', models.CharField(blank=True, max_length=100, null=True)),
                ('location', django.contrib.gis.db.models.fields.PointField(blank=True, default=django.contrib.gis.geos.point.Point(0, 0), srid=4326)),
                ('region', models.CharField(blank=True, max_length=248, null=True)),
                ('pub_date', models.DateTimeField(blank=True, max_length=249, null=True)),
                ('incident_hash', models.CharField(blank=True, max_length=20, primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=100, null=True)),
                ('customer_id', models.CharField(blank=True, max_length=100, null=True)),
                ('description', models.CharField(blank=True, max_length=300, null=True)),
                ('address', models.CharField(blank=True, max_length=50, null=True)),
                ('client_location', django.contrib.gis.db.models.fields.PointField(blank=True, default=django.contrib.gis.geos.point.Point(0, 0), srid=4326)),
                ('user', models.CharField(blank=True, max_length=100, null=True)),
            ],
            options={
                'db_table': 'incident_hits',
                'ordering': ['pub_date'],
                'managed': False,
            },
        ),
    ]
