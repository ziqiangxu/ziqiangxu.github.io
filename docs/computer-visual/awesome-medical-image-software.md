# 医疗图像软件

注意，以下许多网站需要科学上网才能访问

## 常见文件格式的官网

- DICOM [https://www.dicomstandard.org](https://www.dicomstandard.org)
- NIfTI [https://nifti.nimh.nih.gov](https://nifti.nimh.nih.gov)

## 读写和格式转化

|名称         |类型           | 描述                | 官网      |
|--           | --            |--                         |--|
|`pydicom`    | `Python` 库   | 读写 `DICOM` 文件           | https://pydicom.github.io
|`nibabel`    | `Python` 库   | 读写 `NIfTI` 文件           | https://nipy.org/nibabel/
|`dicom2nifti`| `Python` 库   | `DICOM` 转 `NIfTI` 文件    | https://github.com/icometrix/dicom2nifti
| `dcm2niix`  | 命令行工具     | `DICOM` 转 `NIfTI` 文件    | https://github.com/rordenlab/dcm2niix

## 可视化

- vtk, vtkjs, OpenCV, matplotlib
- DICOM Web Viewer [https://ivmartel.github.io/dwv/](https://ivmartel.github.io/dwv/)
- Paraview-Glance [https://kitware.github.io/paraview-glance/nightly](https://kitware.github.io/paraview-glance/nightly/)
- itk-vtk-viewer [https://kitware.github.io/itk-vtk-viewer/app](https://kitware.github.io/itk-vtk-viewer/app/)
- itk-snap / 3D Slicer
- 推荐了一些基于浏览器的dicom viewer，不过有些软件看起来好像已经很久没有维护了，此类软件不推荐使用 [https://medevel.com/14-best-browser-web-based-dicom-viewers-projects](https://medevel.com/14-best-browser-web-based-dicom-viewers-projects/)

## 组织机构

- [https://www.kitware.com/platforms](https://www.kitware.com/platforms)
- [https://www.mitk.org](https://www.mitk.org/)
- Open Health Imaging Foundation [https://ohif.org](https://ohif.org/)， [相关demo](https://viewer.ohif.org/)

## PACS： Picture Archiving and Comunication System

- `Orthanc` 一个开源的 `PACS` 软件 [https://www.orthanc-server.com](https://www.orthanc-server.com/)
- 开源PACS TOP10 [https://medevel.com/10-open-source-pacs-dicom](https://medevel.com/10-open-source-pacs-dicom/)

## 其他

- 此网站收录了许多医疗图像相关的软件 [https://idoimaging.com](https://idoimaging.com/)
- `NVIDIA` 公司推出的模型训练平台，可以方便地用来训练分割模型，提高医学图像的标注效率 [https://docs.nvidia.com/clara/tlt-mi/clara-train-sdk-v3.0/aiaa/key_features.html](https://docs.nvidia.com/clara/tlt-mi/clara-train-sdk-v3.0/aiaa/key_features.html)
- 放射学相关 [https://www.radiomics.io](https://www.radiomics.io)
