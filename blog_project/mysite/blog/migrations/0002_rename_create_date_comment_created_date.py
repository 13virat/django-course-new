# Generated by Django 5.0.6 on 2024-05-28 11:25

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("blog", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="comment",
            old_name="create_date",
            new_name="created_date",
        ),
    ]
