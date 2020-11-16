# Generated by Django 3.1.3 on 2020-11-09 22:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Prompt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('prompt_id', models.CharField(max_length=255, unique=True)),
                ('prompt_type', models.CharField(max_length=255)),
                ('prompt', models.TextField()),
            ],
            options={
                'ordering': ['prompt_id'],
            },
        ),
    ]
