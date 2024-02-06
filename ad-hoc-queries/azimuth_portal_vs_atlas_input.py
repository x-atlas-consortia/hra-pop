import csv


def main():
    """A function to compare HuBMAP dataset IDs in a CSV file against HuBMAP IDs in our atlas input. 
    """
    # to get the dataset IDs from the HuBMAP Portal, use this URL: https://portal.hubmapconsortium.org/search?mapped_data_types[0]=sciRNA-seq&mapped_data_types[1]=sciRNA-seq%20%5BSalmon%5D&mapped_data_types[2]=scRNA-seq%20%2810x%20Genomics%20v2%29&mapped_data_types[3]=scRNA-seq%20%2810x%20Genomics%20v3%29&mapped_data_types[4]=scRNA-seq%20%2810x%20Genomics%29%20%5BSalmon%5D&mapped_data_types[5]=snRNA-seq%20%2810x%20Genomics%20v3%29&mapped_data_types[6]=snRNA-seq%20%28SNARE-seq2%29%20%5BSalmon%5D&mapped_data_types[7]=snRNA-seq%20%5BSalmon%5D&mapped_data_types[8]=snRNAseq%20%28SNARE-seq2%29&origin_samples.mapped_organ[0]=Lung%20%28Right%29&origin_samples.mapped_organ[1]=Kidney%20%28Left%29&origin_samples.mapped_organ[2]=Kidney%20%28Right%29&origin_samples.mapped_organ[3]=Heart&origin_samples.mapped_organ[4]=Liver&entity_type[0]=Dataset    
    
    # global variables
    hra_pop_version = "v0.5.2"
    
    path = "../input-data/" + hra_pop_version + "/bulk-dataset-metadata.csv"
    
    uuids = set()
    
    # load CSV fuile with bulk dataset metadata
    with open(path) as f:
        csvFile = csv.reader(f)
        for lines in csvFile:
          if lines[3] != '':
            uuids.add(lines[3])

    print(list(uuids))
    
# driver code
if __name__ == "__main__":
    main()
