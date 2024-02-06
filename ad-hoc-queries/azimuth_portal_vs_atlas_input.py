import csv
import glob
import pandas as pd


def main():
    """A function to compare HuBMAP dataset IDs in a CSV file against HuBMAP IDs in our atlas input. 
    """
    # to get the dataset IDs from the HuBMAP Portal, use this URL: https://portal.hubmapconsortium.org/search?mapped_data_types[0]=sciRNA-seq&mapped_data_types[1]=sciRNA-seq%20%5BSalmon%5D&mapped_data_types[2]=scRNA-seq%20%2810x%20Genomics%20v2%29&mapped_data_types[3]=scRNA-seq%20%2810x%20Genomics%20v3%29&mapped_data_types[4]=scRNA-seq%20%2810x%20Genomics%29%20%5BSalmon%5D&mapped_data_types[5]=snRNA-seq%20%2810x%20Genomics%20v3%29&mapped_data_types[6]=snRNA-seq%20%28SNARE-seq2%29%20%5BSalmon%5D&mapped_data_types[7]=snRNA-seq%20%5BSalmon%5D&mapped_data_types[8]=snRNAseq%20%28SNARE-seq2%29&origin_samples.mapped_organ[0]=Lung%20%28Right%29&origin_samples.mapped_organ[1]=Kidney%20%28Left%29&origin_samples.mapped_organ[2]=Kidney%20%28Right%29&origin_samples.mapped_organ[3]=Heart&origin_samples.mapped_organ[4]=Liver&entity_type[0]=Dataset    
    
    # global variables
    hra_pop_version = "v0.5.2"
    path_csv = "../input-data/" + hra_pop_version + "/bulk-dataset-metadata.csv"
    path_tsv = "data/"
    hubmap_ids_portal = set()
    
    # the result as a dict for later export
    versioned_key_name = f"ran_through_hra_workflow_runner_in_hra_pop_{hra_pop_version}"
    result = {
      "hubmap_ids_portal" : [],
      versioned_key_name: []
    }
    
    # Use glob to find all TSV files in the directory
    tsv_files = glob.glob(path_tsv + '/*.tsv')
    
    # load TSV files from HuBMAP Portal, then add them to a dictionary
    for file_path in tsv_files:
         with open(file_path) as f:
          file = csv.reader(f, delimiter="\t")
          for line in file:
            id = line[1]
            if "HBM" in id:
              hubmap_ids_portal.add(id)
    
    print(len(hubmap_ids_portal))

    # populate result dict with unique HuBMAP IDs from portal
    result["hubmap_ids_portal"] = list(hubmap_ids_portal)
    for val in hubmap_ids_portal:
      result[versioned_key_name].append(False)

    # # load CSV file with bulk dataset metadata
    with open(path_csv) as f:
        file = csv.reader(f)
        for line in file:
          id = line[0]
          
          # check if ID is among portal datasets
          if id != '':
            if id in result["hubmap_ids_portal"]:
              index = result["hubmap_ids_portal"].index(id)
              result[versioned_key_name][index] = True


      # Convert dict to DataFrame
    df = pd.DataFrame.from_dict(result)

      # Export DataFrame to CSV
    df.to_csv('output/result.csv', index=False)
    
# driver code
if __name__ == "__main__":
    main()
