import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Icons from "../../services/icons/icons";
import { options } from "../../services/toast";
import Button from "../button";
import {
  Organization,
  Input,
  FileBlock,
  Image,
  StyledNameImage,
} from "./style";
import { v4 as uuid } from "uuid";

interface IFile {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface IObjFile {
  image_1?: IFile | string;
  image_2?: IFile | string;
  image_3?: IFile | string;
}

interface IPropsFile {
  multiple?: 1 | 2 | 3;
  defaultImages?: IObjFile;
  onChange: (data: IObjFile) => void;
}

const File = (props: IPropsFile) => {
  const [files, setFiles] = useState<IObjFile>(
    props?.defaultImages ? props?.defaultImages : ({} as IObjFile)
  );
  const uniqueId = `file-${uuid()}`;

  const fileArray = Object.entries(files);

  const returnFiles = Object.fromEntries(
    fileArray.filter((file) => file[1]?.name)
  );

  useEffect(() => {
    props?.onChange && props?.onChange(returnFiles);
  }, [files]);

  return (
    <Organization>
      <Input
        id={uniqueId}
        type="file"
        onChange={(e) => {
          // @ts-ignore
          const file = e.target.files["0"] as IFile;
          console.log(file);

          const types = ["JPG", "PNG", "WEBP", "JPEG"];

          let isErrorType = false;

          let count = 0;

          types.forEach((type) => {
            if (!file.name.toUpperCase().includes(type)) {
              count++;
            }
          });

          if (count === 4) {
            isErrorType = true;
          }

          if (isErrorType) {
            toast.error(
              "Deve enviar apenas imagens JPEG, JPG, PNG, WEBP",
              options
            );
            return;
          }

          const multipleImages = props?.multiple ? props?.multiple : 1;

          if (fileArray.length === multipleImages) {
            toast.error(
              `Deve ser enviado somente ${multipleImages} imagem`,
              options
            );
            return;
          }

          const isFirstFileExist = files["image_1"];
          const isSecondFileExist = files["image_2"];

          const whatPosition = !isFirstFileExist
            ? "image_1"
            : !isSecondFileExist
            ? "image_2"
            : "image_3";

          const newFile = Object.fromEntries([[whatPosition, file]]);

          setFiles({ ...files, ...newFile });
        }}
      />

      <FileBlock htmlFor={uniqueId}>
        ADICIONAR IMAGEM
        <span className="file__count">{fileArray.length}</span>
      </FileBlock>

      {fileArray.map((file, i) => (
        <StyledNameImage>
          <Image key={i}>
            {file[1]?.name ? file[1]?.name?.toUpperCase() : file[1]}
          </Image>
          <Button
            size="small"
            color="red"
            type="button"
            margin="0px"
            onclick={() => {
              const newList = fileArray.filter(
                ([key, value]) => key != file[0]
              );

              setFiles(Object.fromEntries(newList));
            }}
          >
            <Icons.Trash size={50} />
          </Button>
        </StyledNameImage>
      ))}
    </Organization>
  );
};

export default File;
