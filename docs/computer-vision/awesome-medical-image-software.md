---
sidebar: auto
date: 2020--10-06
title: 医疗图像软件
---

注意，以下许多网站需要科学上网才能访问

## 常见文件格式的官网

- `DICOM` 官网： [https://www.dicomstandard.org](https://www.dicomstandard.org)
- `NIfTI` 官网： [https://nifti.nimh.nih.gov](https://nifti.nimh.nih.gov)

> 通常 `DICOM` 文件后缀为 `dcm`， `NIfTI` 文件后缀为 `nii` 或 `nii.gz`(压缩过的 `nii` 文件)。后文将 `DICOM` 简写为 `dcm`，`NIfTI` 简写为 `nii`

## 读写和格式转化

|名称         |类型           | 描述                | 官网      |
|--           | --            |--                         |--|
|`pydicom`    | `Python` 库   | 读写 `dcm`         | [https://pydicom.github.io](https://pydicom.github.io)
|`nibabel`    | `Python` 库   | 读写 `nii`          | [https://nipy.org/nibabel](https://nipy.org/nibabel)
|`dicom2nifti`| `Python` 库   | `dcm` 转 `nii` | [https://github.com/icometrix/dicom2nifti](https://github.com/icometrix/dicom2nifti)
| `dcm2niix` | 命令行工具 | `dcm` 转 `nii`| [https://github.com/rordenlab/dcm2niix](https://github.com/rordenlab/dcm2niix)

## 可视化

常用的库： `vtk` `vtkjs` `OpenCV` `matplotlib`

|名称              |类型           | 特点                | 官网      |
|--                | --            |--                         |--|
|DICOM Web Viewer | 浏览器 | 轻量 |[https://ivmartel.github.io/dwv/](https://ivmartel.github.io/dwv/)
|Paraview-Glance | 浏览器 | 强大 | [https://kitware.github.io/paraview-glance/nightly](https://kitware.github.io/paraview-glance/nightly/)
| itk-vtk-viewer | 浏览器 | |[https://kitware.github.io/itk-vtk-viewer/app](https://kitware.github.io/itk-vtk-viewer/app/)
| ITK-SNAP | 桌面应用 | 轻量 | [http://www.itksnap.org](http://www.itksnap.org)
| 3D Slicer | 桌面应用 | 强大 | [https://www.slicer.org](https://www.slicer.org/)

> [https://medevel.com/14-best-browser-web-based-dicom-viewers-projects](https://medevel.com/14-best-browser-web-based-dicom-viewers-projects/)推荐了一些基于浏览器的`dicom viewer`，不过有些软件看起来好像已经很久没有维护了，此类软件不推荐使用 

## 组织机构

- [https://www.kitware.com/platforms](https://www.kitware.com/platforms)
- [https://www.mitk.org](https://www.mitk.org/)
- Open Health Imaging Foundation [https://ohif.org](https://ohif.org/)， [相关demo](https://viewer.ohif.org/)

## PACS

Picture Archiving and Comunication System 的缩写

- `Orthanc` 一个开源的 `PACS` 软件，官网 [https://www.orthanc-server.com](https://www.orthanc-server.com/)
- [https://medevel.com/10-open-source-pacs-dicom](https://medevel.com/10-open-source-pacs-dicom/) 搜集了一些开源 `PACS`

## 其他

- [https://idoimaging.com](https://idoimaging.com/) 收录了许多医疗图像相关的软件 
- `NVIDIA` 公司推出的模型训练平台`Clara`： [https://docs.nvidia.com/clara/tlt-mi/clara-train-sdk-v3.0/aiaa/key_features.html](https://docs.nvidia.com/clara/tlt-mi/clara-train-sdk-v3.0/aiaa/key_features.html)，可以方便地用来训练分割模型，提高医学图像的标注效率 
- 放射学相关： [https://www.radiomics.io](https://www.radiomics.io)
