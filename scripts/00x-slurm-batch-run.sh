#!/bin/bash

#SBATCH -J hra-workflows
#SBATCH -p general
#SBATCH -o raw-data/slurm-logs/run-%j.txt
#SBATCH -e raw-data/slurm-logs/run-%j.err
#SBATCH --mail-type=ALL
#SBATCH --cpus-per-task 4
#SBATCH --time=8:00:00
#SBATCH --mem=80G
#SBATCH -A r00355

module load nodejs/20.4.0
module load java/17.0.7

srun ./run.sh