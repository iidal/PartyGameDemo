from django.core.management.base import BaseCommand, CommandError
from gameprompts.models import Prompt
from django.conf import settings
from termcolor import cprint
import csv
import os
os.system('color')
from tqdm import tqdm

class Command(BaseCommand):
    help="Imports data from csv file to database"

    def handle(self, *args, **options):
        cprint(f'\nProcessing prompts', 'green', attrs=['reverse'])

        num_lines = sum(1 for line in open('Prompts1.csv'))
        
        with tqdm(total=num_lines) as pbar:
            with open('Prompts1.csv', encoding='utf-8') as csv_file:
                csv_reader = csv.reader(csv_file, delimiter=";")
                line_count = 0

                for row in csv_reader:
                    if line_count != 0:
                        Prompt.objects.update_or_create(prompt_id=row[0], prompt_type=row[1], prompt=row[2])
                        line_count+=1
                        pbar.update(1)
                    else:
                        line_count+=1
                pbar.close()
                cprint(f'\nProcessed {line_count} lines!', 'green', attrs=['reversed'])